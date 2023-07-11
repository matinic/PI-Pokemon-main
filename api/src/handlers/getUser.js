const getUser = require("../controllers_utils/DbControllers/getUser");

module.exports = async (req,res)=>{
    try {
        const {name, email, password} = req.body;
        if(!name.length || !email.length || !password.length) throw Error( 'Faltan datos para ingresar')
        const userVerification = await getUser(req.body)
        return res.status(200).json(userVerification)
    } catch (error) {
        return res.status(404).json(error.message)
    }
}