import axios from "axios";

// json-server --watch -d 180 --host 192.168.0.42 db.json -> colocar IPV4

const api = axios.create({

    baseURL: 'http://192.168.0.42:3000/',
})

export default api;