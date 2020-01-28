var express = require('express');
var SHA256 = require("crypto-js/sha256");


const BlockChain = require('./models/Blockchain');
const PdfParser = require('./models/PdfParser');
const Services = require('./services/services');


var app = express();

var blockChain = new BlockChain();
var pdfParser = new PdfParser();
var services = new Services();

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

// blockChain.launchBlockchain(blockChain, pdfParser, services, book, lastPage);















// blockchainInit.then(function (value) {
//   console.log(value);
// });

// blockchainIterate.then(function (value) {
//   console.log(value);
// });



// blockChain.blockchainIterate().then();

// Add Blocks to Blockchain
// for (let i = 0, p = Promise.resolve(); i < 10; i++) {
//   p = p.then(_ => new Promise(resolve =>
//       setTimeout(function () {
//           console.log(i);
//           resolve();
//       }, Math.random() * 1000)
//   ));
// }


// function refresh() {
//   services.addBlock();
// };

// refresh();

app.listen(3000);




module.exports = app;
