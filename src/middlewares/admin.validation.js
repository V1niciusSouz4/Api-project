import { userModel } from "../modules/users/user.model.js"

export const validateTokenAdmin = async(req, res, next) => {

    const token = req.headers.authorization

    const { sub } = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())

    const teste = await userModel.findById( sub )
    
    if( teste.admin )
      return next()

    return res.status(400).json({message: "Usuário não autorizado"})
}

export const validateAdmin = async(req, res, next) => {

    const token = req.body.email   

    const testeAdmin = token.includes("@itlean")
    console.log(testeAdmin)

    if( testeAdmin ){
        req.body.admin = true
        return next()
    }
      
    req.body.admin = false
    return next()
}