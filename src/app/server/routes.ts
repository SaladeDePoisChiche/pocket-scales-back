import { Router } from "express";
import randomScalesController from "../controllers/random-scales.controller";


const router = Router().use("/random", randomScalesController);

export default router; 
