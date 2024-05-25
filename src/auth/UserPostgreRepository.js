const db = require("../database");
const User = require("./User");

class UserPostgreRepository {
    constructor(){
       this.db = db;
    }

    async findByEmail(email){
        const storedUser = await this.db.oneOrNone("SELECT * FROM Users WHERE email = $1", email)
        return storedUser ? new User(storedUser) : null
    }

    async save(User) {
        await this.db.none("INSERT INTO Users (id, nickname, email, senha) VALUES($1, $2, $3, $4)", [
            User.id,
            User.nickname,
            User.email,
            user.senha
        ])
    }
}
module.exports = UserPostgreRepository