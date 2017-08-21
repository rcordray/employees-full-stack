var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

// router.post('/', function(req, res) {
//     console.log('message post was hit!');
//     pool.connect(function(errorConnectingToDatabase, client, done) {
//         if (errorConnectingToDatabase) {
//             console.log('Error connecting to database', errorConnectingToDatabase);
//             res.sendStatus(500);
//         } else {
//             client.query('INSERT INTO employees (firstName, lastName, jobTitle, salary) VALUES ($1, $2, $3, $4);', [req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.salary], function(errorMakingQuery, result) {
//                 done();
//                 if (errorMakingQuery) {
//                     console.log('Error making database query', errorMakingQuery);
//                     res.sendStatus(500);
//                 } else {
//                     res.sendStatus(201);
//                 }
//             });
//         }
//     });
// });




router.post('/', function(req, res) {
    pool.connect(function(ErrorConnecting, client, done) {
        done();
        if (ErrorConnecting) {
            console.log('error connecting to database', ErrorConnecting);
            res.sendStatus(500)
        } else {
            client.query('INSERT INTO employees (firstName, lastName, jobTitle, salary) VALUES ($1, $2, $3, $4);', [req.body.firstname, req.body.lastname, req.body.jobtitle, req.body.salary],
                function(errorMakingQuery, result) {
                    done();
                    if (ErrorMakingTask) {
                        console.log('Error making task', ErrorMakingTask);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }

                })
        }

    })
})

router.get('/', function(req, res) {
    console.log('message get was hit!');
    pool.connect(function(ErrorConnecting, client, done) {
        if (ErrorConnecting) {
            console.log('Error connecting to database');
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM employees', function(ErrorMakingTask, result) {
                    done();

                    if (ErrorMakingTask) {
                        console.log('Error making task', ErrorMakingTask);
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