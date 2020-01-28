var express = require('express');

const BlockChain = require('./models/Blockchain');
const PdfParser = require('./models/PdfParser');

var app = express();

blockChain = new BlockChain();
pdfParser = new PdfParser();

// var timer = Math.floor(Math.random() * 31);


// Initialize Genesis Block
pdfParser.pdfExtract('./pdfs/content.pdf', 1, 5).then(function (result) {
  blockChain.newBlock("f5cfe0f1ae5acda96e516bb84c23aedbf5c77b3381af80dce24b23a9d362828e", result, 0, 1, 0);
  console.log(blockChain.chain);
});


async function refresh() {
  const lastBlock = blockChain.chain[blockChain.chain.length - 1];
  pdfParser.pdfExtract('./pdfs/content.pdf', lastBlock.last_page, last_block.last_page + 4).then(function (result) {
    blockChain.newBlock(lastBlock.hash, result, 0, last_block.last_page + 4);
    // timer = Math.floor(Math.random() * 31);
  });
};

app.listen(3000);




module.exports = app;
