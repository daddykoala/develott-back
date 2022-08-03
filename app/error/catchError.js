
const manageError = {

    async errorHandler (error, _, res , next){
    console.log('je suis dans le catch error')
    console.error(error.message)
    return res.status(error.statusCode || 500).json({ message: error.message, error: error});
    }

};
module.exports = manageError;