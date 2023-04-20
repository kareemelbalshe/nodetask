import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
    },
    collage: {
        type: String,
    }
}, {timestamps: true})

export default model('kareem', studentSchema);