//Import dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const Block = require('../models/Block');
const services = require('../services/services');

var app = express();
app.use(bodyParser.json());

//Start routing

// app.get('/', services.getBlockchain());

// //Driver Routes
app.post('/block', (req, res) => {
    try {
        const block = new Block(
            req.body.index,
            req.body.previous_hash,
            req.body.records,
            req.body.contributor_id,
            req.body.last_page,
            req.body.nonce,
            req.body.timestamp,
        );
        block.hash = req.body.hash;
        console.log(block);

        res.send("Block Sended");
    } catch (error) {
        console.log(error);
        res.send("Error While Sending Block");
    }
});


module.exports = app;