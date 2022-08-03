class MainError extends Error{

    constructor(message, _, res, statusCode = 500){
        super(message)
        res.status(statusCode).json({"message" : message})
        
    }

};

module.exports = MainError;