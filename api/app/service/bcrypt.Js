const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';


  module.exports= bcrypt.genSalt(saltRounds, function(err, salt) {
    const paswordHash = bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(passwordhash);
        // Store hash in your password DB.
    });
})
