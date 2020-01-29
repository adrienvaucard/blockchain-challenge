//Import dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const Block = require('../models/Block');
const services = require('../services/services');

const blockChain = require('../app');

// Initialize app variable
var app = express();
app.use(bodyParser.json());

// Block Validation container
var validatingBlock = [];


app.get('/', (req, res) => {
	res.json(blockChain.chain);
});


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
        
        // Move to validation
        if (!validatingBlock.length >0) {
            validatingBlock.push(block);
            res.json(validatingBlock[0]);

            // Clear Array for next blocks
            validatingBlock = [];
        } else {
            res.send("Busy Node");
        }        
    } catch (err) {
        res.status(500).send(err);
    };
});


module.exports = app;