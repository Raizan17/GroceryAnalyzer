import express from "express"
import { addPost,addPost2,addPost3, addPost4, addPost5, addPost6,
    addPost7, addPost8, addPost9, addPost10,addPost11,addPost12 } from "../controllers/bakery.js";



const router = express.Router()
//bread
router.get("/",addPost);
router.get("/2",addPost2);
router.get("/3",addPost3);
router.get("/4",addPost4);
router.get("/5",addPost5);
router.get("/6",addPost6);
//muffins
router.get("/7",addPost7);
router.get("/8",addPost8);
router.get("/9",addPost9);
router.get("/10",addPost10);
router.get("/11",addPost11);
router.get("/12",addPost12);

export default router;