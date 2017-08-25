var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var pool = require('../modules/pool');

router.use(bodyParser.json());


router.post('/', function(req, res) {
    console.log('message post was hit!');
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO employees (firstname, lastname, jobtitle, salary) VALUES ($1, $2, $3, $4);', [req.body.firstname, req.body.lastname, req.body.jobtitle, req.body.salary], function(errorMakingQuery, result) {
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});



router.get('/', function(req, res) {
    console.log('message get was hit!');
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM employees', function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows)
                    }
                }

            );
        }
    });
});



module.exports = router;