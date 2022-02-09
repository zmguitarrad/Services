const { db } = require("../conexion")

const getTouristAttraction = async(req, res) => {
    const { body } = req;
    const response = await db.any("select * from cat_turistica")
    res.json(response);
}

const createTouristAttraction = async(req, res) => {

    const {
        ctg_id, ctg_nombre_general
    } = req.body;
    try {
        const response = await db.query("INSERT INTO cat_turistica (ctg_id, ctg_nombre_general) VALUES ($1,$2);", 
        [ctg_id, ctg_nombre_general]);
        res.json({
            message: 'Created Successfuly',
            body: {
                    Categoria:{
                    ctg_id, ctg_nombre_general
                }
            }
        })  
    } catch (error) {
        res.json({
            message: `Internal server error: ${error}`
        });
    }
}


module.exports = {
    getTouristAttraction,
    createTouristAttraction

}