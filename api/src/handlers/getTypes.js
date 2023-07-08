const getTypes = require('../controllers_utils/ApiControllers/getTypes')
const getTypesDb = require('../controllers_utils/DbControllers/getTypesDb')

module.exports = async (req,res)=>{
    try{
       const types = await getTypesDb()
       return res.status(200).json(types)
    }catch(error){
       try {
            const types = await getTypes()
            return res.status(200).json(types)
       } catch (error) {
            return res.status(404).json({message: "No se encontro ningun tipo",error})
       }
    }
}

