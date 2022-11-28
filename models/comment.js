import mongoose from "mongoose";

const userComment = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});



export default mongoose.model('comments', userComment);