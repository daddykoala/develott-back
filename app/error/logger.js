const bunyan = require ('bunyan');
const log = bunyan.createLogger({name:'mylogger'})
log.info('hi');