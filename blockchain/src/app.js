// Dependencies
const express = require('express');
const routing = require("./router/router.js");
const SHA256 = require("crypto-js/sha256");
const axios = require('axios').default;

// Application variables
var app = require('../src/router/router');
var peers = require('./peers.config');

// Declare custom classes
const BlockChain = require('./models/Blockchain');
const PdfParser = require('./models/PdfParser');
const Services = require('../src/services/services');

// Instance custom classes
var blockChain = new BlockChain();
var pdfParser = new PdfParser();
var services = new Services();

// Initialize variables
let book = [];
let lastPage = 1;
let refreshBlockchain = true;

// Get Whole Book
pdfParser.pdfExtract('src/pdfs/content.pdf').then(function (result) {
  book = result;


  // Initialize Genesis Block
  let pages = book.slice(1, 5);
  let block = blockChain.newBlock("f5cfe0f1ae5acda96e516bb84c23aedbf5c77b3381af80dce24b23a9d362828e", pages, 0, lastPage);
  blockChain.chain.push(block);


  // Create other block and add them to blockchain
  while (refreshBlockchain) {

    // Get value from previous block
    const lastBlock = blockChain.chain[(blockChain.chain.length - 1).valueOf()];


    // Get pages values
    const startPage = lastBlock.last_page;
    const endPage = lastBlock.last_page + 4 <= book.length ? lastBlock.last_page + 4 : book.length;

    // Test if pages are concordants
    if (startPage < book.length) {
      
      // Get pages + hash of the pages
      pages = {
        content: book.slice(startPage, endPage),
        hash: SHA256(JSON.stringify(book.slice(startPage, endPage))).toString()
      };


      // Create Block
      block = blockChain.newBlock(lastBlock.hash, pages, 0, lastBlock.last_page);

      // Send Block for Validation
      services.sendBlock(axios, block, peers);

      // Add Block
      if (!services.checkDuplicate(blockChain.chain, block)) {
        blockChain.chain.push(block);
        console.log("Node pushed block" + block.index);
      }
    } else {
      refreshBlockchain = false;
    }
  }
});

app.listen();

module.exports = blockChain, pdfParser