export default class StorageFake {

    constructor() {
        this.messages = []
    }

    save(msg) {
        this.messages.push(msg)
    }

}