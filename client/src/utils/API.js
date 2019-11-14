import axios from "axios";

export default {
    eventPost: function (data) {
        return axios.post('/api/events',
            data)
    },
    likeUpdate: function (eventID, data) {
        console.log(data);

        return axios.put("/api/events/" + eventID, { "likes": data })
    }
}