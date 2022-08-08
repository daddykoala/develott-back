const bunyan = require ('bunyan');

const streams = [];


log.info('hi');

const logger = bunyan.createLogger({
    name:'develott-api',
    streams
});


module.exports = logger;