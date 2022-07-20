//todo pool ou client ? 
const Pool = require('pg-pool');

const pool = new Pool();

pool.connect();

module.exports = pool ;

