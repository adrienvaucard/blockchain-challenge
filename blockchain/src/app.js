var express = require('express');
const routing = require("./router/router.js");
var SHA256 = require("crypto-js/sha256");
var app = require('../src/router/router');

const BlockChain = require('./models/Blockchain');
const PdfParser = require('./models/PdfParser');

blockChain = new BlockChain();
pdfParser = new PdfParser();

let book = [];
let lastPage = 1;

// Get Whole Book
pdfParser.pdfExtract('./pdfs/content.pdf').then(function (result) {
  book = result;

  // Initialize Genesis Block
  let pages = book.slice(1, 5);
  let block = blockChain.newBlock("f5cfe0f1ae5acda96e516bb84c23aedbf5c77b3381af80dce24b23a9d362828e", pages, 0, lastPage);
  blockChain.chain.push(block);
  console.log(blockChain.chain);

  lastPage = lastPage + 4;
  // Create other block and add them to blockchain
  for (i = lastPage.valueOf(); i < book.length; i += 4) {
    // Get value from previous block
    const lastBlock = blockChain.chain[(blockChain.chain.length - 1).valueOf()];

    // Get pages values
    const startPage = lastBlock.last_page;
    const endPage = lastBlock.last_page + 4 <= book.length ? lastBlock.last_page + 4 : book.length;

    // Get pages + hash of the pages
    pages = {
      content: book.slice(startPage, endPage),
      hash: SHA256(JSON.stringify(book.slice(startPage, endPage))).toString()
    };

    block = blockChain.newBlock(lastBlock.hash, pages, 0, lastBlock.last_page);
    blockChain.chain.push(block);
    console.log(block);
  }
});

app.listen(3000);
