import axios from "axios";
export default axios.create({
    baseURL :"https://musicbrainz.org/ws/2",
    headers: {
        // 'Access-Control-Allow-Origin': 'http://localhost:5173/',
        // "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
        // "Access-Control-Allow-Headers":" X-PINGOTHER ,X-Requested-With, Content-Type, Authorization, Origin, Accept",

        // "access-control-allow-headers" : "Content-Type, Authorization, Content-Length, X-Requested-With",
        // "access-control-allow-methods" :"GET,PUT,POST,DELETE,OPTIONS",
        "Content-Type": "text/plain",
        // "Access-Control-Max-Age": 86400

      },
    // params:{
    //     key:""
    // }
})
