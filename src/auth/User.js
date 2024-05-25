const {v4:uuidv4} = require("uuid")

class User{
    constructor({id, nickname, email, senha }){
        this.id = id ?? uuidv4();
        this.nickname = nickname;
        this.email = email;
        this.senha = senha;
    }
};

module.exports = User;