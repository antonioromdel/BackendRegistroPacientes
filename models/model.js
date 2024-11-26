import { Schema, model } from "mongoose"

const Patient = new Schema({
    _id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    takecare: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    sintomas: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})

export default model("patients", Patient)