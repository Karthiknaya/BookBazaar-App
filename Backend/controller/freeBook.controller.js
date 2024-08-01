import freeBook from "../model/freebook.model.js";

export const getfreeBook = async(req, res) => {
    try {
        const freebook = await freeBook.find();
        res.status(200).json(freebook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};