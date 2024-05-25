class AuthController {
    constructor(service){
        this.service = service;
    }

    register(request){
        const {nickname, email, senha,} = request.body;

        if (! nickname || !email || !senha){
            return {code:400, body: {message : "nickname, email, senha necessarios. "}}
        }

        try{
           const user = this.service.register(nickname, email, senha)
           return{code:201, body : user};
        } catch (error) {
            return{code: 400, body:{message:error.message}};
        }
    }

    async login(request){
        const {email, senha} = request.body;
        
        if (!email || !senha) {
            return {code: 400, body: {message: "email e senha necessarios."}}
        }

        try{
            const body = this.service.login(email, senha);
            return {code:200, body};
        } catch (error) {
            return { code: 400, body: {message: error.message}};
        }
    }
}

module.exports = AuthController;