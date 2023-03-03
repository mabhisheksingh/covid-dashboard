import express from "express";
const router = express.Router()

router.get("/get",(req,res)=>{
    res.send("Hi_V2").status(200);
});

export default router;