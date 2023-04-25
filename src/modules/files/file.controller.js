import { resolve } from 'path'
import { existsSync } from 'fs'

export const fileUpload = (req, res) => {
    if (!req.file) return res.status(422).json({ message: 'PLease, select file' })

    return res.json({ data: req.file })
}

export const fileUploadbyId = (req, res) => {
    if (!req.file) return res.status(422).json({ message: 'PLease, select file' })

    return res.json({ data: req.file })
}


export const viewImage = (req, res)=>{

    const { imageName } = req.params
    const imagePath = resolve('uploads', imageName)

    if(!existsSync(imagePath)){
        return res.status(404).json({message: 'Image not found'})
    }

    return res.sendFile(imagePath)
}