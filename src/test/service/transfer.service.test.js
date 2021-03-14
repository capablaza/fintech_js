import TransferRequest from "../../main/service/transferRequest";
import TransferService from "../../main/service/transferService";
import ClientStub from "./clientStub";
import StorageDummy from "./storageDummy";
import StorageFake from "./storageFake";

test('Given TransRequest WhenAmountIsLessThanZero ThenResponseIs520 ', () => {
    //prepare

    let storage = new StorageDummy()
    let client = new ClientStub(520, "")

    let service = new TransferService(client, storage)

    let amount = -100
    let from = "santander"
    let to = "bci"

    let request = new TransferRequest(amount, from, to)

    //act
    let response = service.transfer(request)

    //assert    
    expect(response.code).toBe(520);
});

test('GivenTransRequestWhenAmountIsEqualToZeroThenResponseIs520', () => {

});

test('GivenTransRequestWhenAmountIsEqualToZeroThenResponseIs520', () => {

});

test('GivenTransRequestWhenOriginsAreEqualsThenResponseIs522', () => {

});

test('GivenTransRequestWhenConditionsAreBadThenSaveErrorInStorage ', () => {
    //prepare

    let storage = new StorageFake()
    let client = new ClientStub(520, "")

    let service = new TransferService(client, storage)

    let amount = -100
    let from = "santander"
    let to = "bci"

    let request = new TransferRequest(amount, from, to)

    //act
    let response = service.transfer(request)

    //assert    
    expect(response.code).toBe(520);
    expect(storage.messages.length).toBe(1);
 
});

