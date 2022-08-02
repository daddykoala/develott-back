class MainError extends Error{

    constructor(errorMessage, errorType=''){
        super()

        switch(this.constructor.name){
            case 'jobError':
                console.log("job error");
                break;
            case 'logoutError':
                console.log("logout error");
                break;
            case 'projectError':
                console.log("project error");
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
            default:
                console.log('les autres')
        }
    }

};


class jobError extends MainError{}
class logoutError extends MainError{}
class projectError extends MainError{}
class refreshTokenError extends MainError{}
class roleError extends MainError{}
class technoError extends MainError{}
class userError extends MainError{}

