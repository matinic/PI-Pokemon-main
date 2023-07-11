const {User} = require('../../db')
module.exports = async (body)=>{
    const findedUser = await User.findOne({ where: {
        name: body.name,
        email: body.email
    } })
    if(!findedUser) throw Error('Usuario no encontrado');
    else if(!await findedUser.comparePassword(body.password)) {throw Error('Contraseña invalida')}
    else{return true}
}