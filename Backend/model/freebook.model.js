import mongoose from "mongoose";

const freebookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const freeBook = mongoose.model("freeBook", freebookSchema);

export default freeBook;