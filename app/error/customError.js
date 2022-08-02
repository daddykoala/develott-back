class MainError extends Error{

    constructor(errorMessage, errorType=''){
        super()

        this.name = this.constructor.name;
        this.message = errorMessage;

        switch(this.constructor.name){
            case 'jobError':
                console.log("job error");
                break;
            case 'logoutError':
                console.log("logout error");
                break;
            case 'projectError':
                console.log("project error");
                if(errorType == 0){
                    this.statusCode = 404;
                }else{
                    this.statusCode = 409;
                }
                break;
            case 'refreshTokenError':
                console.log("refreshToken error");
                break;
            case 'roleError':
                console.log("role error");
                break;
            case 'technoError':
                console.log("techno error");
                break;
            case 'userError':
                console.log("user error");
                if(errorType == 0){
                    this.statusCode = 404;
                }else{
                    this.statusCode = 409;
                }
            default:
                console.log('les autres');
        }       this.statusCode = 500;
    }

};


class jobError extends MainError{};
class logoutError extends MainError{};
class projectError extends MainError{};
class refreshTokenError extends MainError{};
class roleError extends MainError{};
class technoError extends MainError{};
class userError extends MainError{};

module.exports = {MainError, jobError, logoutError, projectError, refreshTokenError, roleError,technoError, userError};