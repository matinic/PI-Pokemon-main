const postUser = require("../controllers_utils/DbControllers/postUser")

module.exports = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        if(!name || !email || !password) throw Error('Faltan datos para realizar la operación')
        await postUser(req.body)
        return res.status(200).json({message:'Usuario creado con exito'})
    } catch (error) {
        return res.status(404).json(error.message)
    }
}