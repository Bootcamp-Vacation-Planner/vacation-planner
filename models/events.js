const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    link: String,
    details: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;