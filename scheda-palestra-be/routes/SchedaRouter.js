import express from "express";
import { index, show, store, destroy } from "../controllers/SchedaController.js"


const schedaRouter = express.Router();


schedaRouter.get("/", index);
schedaRouter.get("/:id", show);
schedaRouter.post("/", store);
schedaRouter.delete("/:id", destroy);

export default schedaRouter