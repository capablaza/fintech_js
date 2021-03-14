export default class Client{
    
    async transfer(request) {
        //TODO logica de conexion al endpoint y response al servicio
        let url = 'http://1919192/webpay/transfer'

        axios.get(url, request).then(()=> {

        });
    }

}