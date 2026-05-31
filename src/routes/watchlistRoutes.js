import express from "express";
import { addToWatchlist } from "../controllers/watchlistControllers.js";

const router = express.Router();

router.post("/", addToWatchlist);


//outer.post("/login", login);

//router.post("/logout", logout);




export default router; 