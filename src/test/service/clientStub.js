import TransferClientResponse from "../../main/service/transferClientResponse";

export default class ClientStub{


    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    
    transfer(request) {
        return new TransferClientResponse(this.code, this.message)
    }
}