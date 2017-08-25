var pg = require('pg');

var config = {
    database: 'employees',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
};

var pool = pg.Pool(config)

module.exports = pool;