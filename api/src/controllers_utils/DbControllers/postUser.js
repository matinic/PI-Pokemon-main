const {User} = require('../../db')
module.exports = async (userInfo)=>{
        const user = await User.create(userInfo)
}