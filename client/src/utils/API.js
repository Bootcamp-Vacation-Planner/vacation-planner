import axios from "axios";

export default {
    eventPost: function (data) {
    return axios.post('/api/events', 
        data)
    }
}