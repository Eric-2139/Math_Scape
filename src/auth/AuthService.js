const { errors } = require("pg-promise");
const User = require("./User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class AuthService{
    constructor(repository){
        this.repository = repository;
    }

    async register(nickname,email,senha){
        const userExist = await this.repository.findByEmail(email);
        if (userExist) throw new Error("Email existente");
        
        const newUser= new User({nickname, email, senha});
        newUser.senha = bcrypt.hashSync(newUser.senha, 10)
        await this.repository.save(newUser);
        return newUser;
    }

    async login(email, senha){
        const user = await this.repository.findByEmail(email);
        if(!User) throw new Error ("usuario nao encontrado.");

        const isSenha = bcrypt.compareSync(senha,user.senha);
        if (!isSenha) throw new Error ("senha incorreta.");

        const token = jwt.sign({id: user.id, email:user.email}, "15906496Ydm", {expiresIn: "36d"});
        user.senha = undefined;
        return{token, user};
    }

    async verificarToken (token){
        const decodedToken = jwt.verificarToken(token, "15906496Ydm");
        const user = await this.repository.findByEmail(decodedToken.email);
        return user;
    }
}

module.exports = AuthService;