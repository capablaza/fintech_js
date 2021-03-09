export default class Response{
    constructor(code, message){
        this.code = code
        this.message = message
    }

    code(){
        return this.code        
    }
    message(){
        return this.message
    }
}