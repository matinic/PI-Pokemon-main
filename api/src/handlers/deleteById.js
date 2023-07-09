const deleteDb = require("../controllers_utils/DbControllers/deleteDb")

module.exports= async(req,res)=>{
    const {id} = req.params;
    try{
        const deleted = await deleteDb(id)
        if(!deleted)throw Error
        return res.status(200).json({message: `Element deleted: ${deleted}`})
    }catch(error){
        return res.status(400).json({message: "Unfound records to eliminate"})
    }
}