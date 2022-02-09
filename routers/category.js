const { Router } = require("express")
const router = Router()

const {
   
    getTouristAttraction,
    createTouristAttraction


} = require("../controllers/category.controller")


router.get("/category", getTouristAttraction);
router.post("/category", createTouristAttraction)


module.exports = router