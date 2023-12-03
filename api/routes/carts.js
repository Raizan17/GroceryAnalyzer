import express from "express"
import { addPost,addPost2 } from "../controllers/cart.js";



const router = express.Router()

router.get("/",addPost);
router.get("/2",addPost2);

export default router;