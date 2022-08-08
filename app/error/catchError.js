
const manageError = {

    async errorHandler (error, _, res){
    console.error(error.message)
    return res.status(error.statusCode || 500).json({ message: error.message, error: error});
    }

};
module.exports = manageError;