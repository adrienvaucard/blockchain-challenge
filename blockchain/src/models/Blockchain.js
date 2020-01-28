const app = require('../app');
const Block = require("./Block");

class Blockchain {
    constructor() {
        // Create chain and transaction
        this.chain = [];
        this.current_transactions = [];
        this.pow;
    }


    // launchBlockchain(blockChain, pdfParser, book, lastPage) {
    //     pdfParser.pdfExtract('./pdfs/content.pdf').then(function (result) {
    //         book = result;
          
    //         // Initialize Genesis Block
    //         let pages = book.slice(1, 5);
    //         let block = blockChain.newBlock("f5cfe0f1ae5acda96e516bb84c23aedbf5c77b3381af80dce24b23a9d362828e", pages, 0, lastPage);
    //         blockChain.chain.push(block);
    //         console.log(blockChain.chain);
          
    //         lastPage = lastPage + 4;
    //         // Create other block and add them to blockchain
    //         for (let i = lastPage.valueOf(); i < book.length; i += 4) {
    //           const lastBlock = blockChain.chain[(blockChain.chain.length - 1).valueOf()];
    //           const startPage = lastBlock.last_page;
    //           const endPage = lastBlock.last_page + 4 <= book.length ? lastBlock.last_page + 4 : book.length;
    //           pages = book.slice(startPage, endPage);
    //           console.log(pages);
    //           block = blockChain.newBlock(lastBlock.hash, pages, 0, lastBlock.last_page);
    //           blockChain.chain.push(block);
    //           console.log(block);
    //         }
    //       });
    // }

    // Verify Nonce and create Block
    newBlock(previous_hash, records, contributor_id, last_page) {
        let block;
        let nonceFound = false;
        let i = 0;

        while (!nonceFound) {
            block = new Block(
                this.chain.length,
                previous_hash,
                records,
                contributor_id,
                last_page + 4,
                i,
                new Date().getTime(),
            );

            // Check if Hash start with a 0
            if (block.hash.startsWith('0')) {
                nonceFound = true;
            } else {
                i++;
            }
        }
        return block;
    }

}

module.exports = Blockchain;