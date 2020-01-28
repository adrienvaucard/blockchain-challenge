const app = require('../app');
const Block = require("./Block");

class Blockchain {
    constructor() {
        // Create chain and transaction
        this.chain = [];
        this.current_transactions = [];
        this.pow;
    }

    // async blockchainInit() {
    //     pdfParser.pdfExtract('./pdfs/content.pdf', 1, 5).then(function (result) {
    //         blockChain.newBlock("f5cfe0f1ae5acda96e516bb84c23aedbf5c77b3381af80dce24b23a9d362828e", result, 0, 1).then(function (block) {
    //             blockChain.chain.push(block);
    //             console.log(blockChain.chain);
    //             return(blockChain.chain);
    //         }).then(function (block) {
    //             // console.log(blockChain.chain);
    //         });
    //     });
    // }

    // async blockchainIterate() {
    //     const lastBlock = blockChain.chain[blockChain.chain.length];
    //     console.log(blockChain);
    //     pdfParser.pdfExtract('./pdfs/content.pdf', lastBlock.last_page, lastBlock. last_page + 4).then(function (result) {
    //         blockChain.newBlock(lastBlock.hash, result, 0, lastBlock.last_page).then(function (block) {
    //             return (block);
    //         }).then(function (block) {
    //             console.log(block);
    //         });
    //     });
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
                new Date(),
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