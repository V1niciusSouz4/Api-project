export const errorHandler = (err, req, res, next) => {
    if (err.name === 'AppError') { 
        return res.status(err.status).json({ 
            error: err.message,
            stack: err.stack
        })
    }
    if (err.code === 11000) {
        return res.status(400).json({
            error: 'Duplicate user'
        })
    }
    if(err.name === 'CastError'){
        console.log(err)
        return res.status(400).json({message: 'Token Wrong'})
    }
    return res.status(500).json({
        error: err.message,
    })
}