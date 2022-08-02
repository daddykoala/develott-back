
const manageError = {

    async errorHandler (error, _, res , next){
    console.log('error')
    return res.status(error.statusCode || 500).json({ message: error.message, error: error});
    }

};
module.exports = manageError;