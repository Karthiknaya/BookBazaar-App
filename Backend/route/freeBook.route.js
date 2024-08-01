import express from "express";
import { getfreeBook } from "../controller/freeBook.controller.js";

const router = express.Router();

router.get("/", getfreeBook);

export default router;