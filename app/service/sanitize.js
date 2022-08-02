const createDOMPurify = require('dompurify');

const bodySanitizer = (req,res,next)=>{
    if(req.body){
        for(const property in req.body){
            req.body[property] = createDOMPurify.sanitize(req.body[property]);
        }
    }
next();
};

module.exports = bodySanitizer;