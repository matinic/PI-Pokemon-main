const putById = require("../../controllers_utils/DbControllers/pokemonDb/updatePokemon");

module.exports = async(req,res)=>{
    try {
        const updated = await putById(req.body)
        if(!updated) throw Error
        res.status(200).json({message: `Element updated: ${updated}`})
    } catch (error) {
        res.status(400).json({message: "There are not records updated"})
    }

}