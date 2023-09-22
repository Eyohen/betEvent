import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://betevent-api.onrender.com/api/v1/events/",
});



export default newRequest;

