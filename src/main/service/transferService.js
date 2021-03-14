import TransferResponse from "./transferResponse";

export default class TransferService {

    constructor(client, storage) {
        this.client = client
        this.storage = storage
    }

    transfer(request) {

        let response = this.client.transfer(request);
        
        if (response.code == 520) {
            this.storage.save("Try transfer amount not valid");
            return new TransferResponse(520, "The amount must be major than zero.");
        }
        if (response.code == 521) {
            this.storage.save("Try transfer amount not valid");
            return new TransferResponse(521, "The amount can't be major than 200.000.");
        }
        if (response.code == 522) {
            this.storage.save("Try with same accounts for transactions");
            return new TransferResponse(522, "The accounts can't be equals.");
        }

        if (response.code == 503) {
            this.storage.save("Service Unavailable");
            return new TransferResponse(503, "The operation can't be process, please try again.");
        }
        
        return new TransferResponse(response.code, response.message);

    }
}