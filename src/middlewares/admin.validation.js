import { userModel } from "../modules/users/user.model.js"

export const adminGlobal = async(req, res, next) => {

    const user = await userModel.findOne({_id: req.user_id})

    let teste = await userModel.find({}, { password: 0, __v: 0 })

    console.log(teste)

    if( teste.length == 0 ){
        return next()
    }
    else if( user.adminGlobal )
    {
        return next()
    }

    return res.status(403).json({message: "Access denied"})
}
export const admin = async(req, res, next) => {

    const user = await userModel.findOne({_id: req.user_id})

    if( user.admin )
    {
        return next()
    }

    return res.status(403).json({message: "Access denied"})
}