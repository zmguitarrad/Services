const { db } = require("../conexion")

const getHistory = async(req, res) => {
    const { body } = req;
    const response = await db.any("select * from historia ")
    res.json(response);
}

const createHistory = async(req, res) => {

    const {
        id_param, 
        param_descripcion
    } = req.body;
    try {
        const response = await db.query("INSERT INTO historia (id_param, param_descripcion) VALUES ($1,$2);", 
        [id_param, param_descripcion]);
        res.json({
            message: 'History created Successfuly',
            body: {
                Historia:{
                    id_param, 
                    param_descripcion
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
    getHistory,
    createHistory

}