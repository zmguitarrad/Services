const { Router } = require("express")
const router = Router()

const {
    getHistory,
    createHistory,



}= require("../controllers/index.controller")
   


router.get("/history", getHistory);
router.post("/history", createHistory)



module.exports = router