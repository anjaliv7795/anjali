var express = require('express');
var router = express.Router();
var alumniService = require('../services/alumniService');
var appLogger = require('../logging/appLogger');
var multer = require('multer');
var Client = require('node-rest-client').Client
var config = require('../config/config.' + process.env.NODE_ENV);
var entitiesRemoteUrl = config.entitiesRemoteUrl;
router.get('/getAllAlumniEvent', function (req, res) {
    var client = new Client();
    // remote url has to come from configuration file based on entity name
    var remoteUrl = entitiesRemoteUrl["events"];
    // set content-type header and data as json in args parameter 
    var args = {
        data: { filterQuery: req.body, projection: ["title", "venue", "fdesc", "startdate", "enddate", "starttime", "endtime", "imageGallery"] },
        headers: {
            "Content-Type": "application/json",
            "Authorization": "PsgSt02112016"
        }
    };
    // direct way 
    client.post(remoteUrl, args, function (data, response) {
        // parsed response body as js object 
        if (response.statusCode == 200) {
            res.send(data);
        }

    }).on('error', function (e) {
        res.status(500).send({ err: e });
    }).end()
});
//sis api for bymap
router.get('/getAllStudentLoc',  function (req, res) {
    var client = new Client();
    var query = {};    
    var remoteUrl = entitiesRemoteUrl["bymap"];
    // set content-type header and data as json in args parameter 
    // var projection = ["attendanceDate","session","studentName","attendance"];
    var args = {
        data: { filterQuery: query, projection: ["basic.nationality","basic.state","basic.placeOfBirth"] },    
        headers: {
            "Content-Type": "application/json",
            "Authorization": "annasarpprasanna"
        }
    };
    // direct way 
    client.post(remoteUrl, args, function (data, response) {
        // parsed response body as js object 
        if (response.statusCode == 200) {
            res.send(data);
        }
        else {
            res.status(500).send({ err: response.statusMessage });
        }

    }).on('error', function (e) {
        res.status(500).send({ err: e });
    }).end()
});

module.exports = router;