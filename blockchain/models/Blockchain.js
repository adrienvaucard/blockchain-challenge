const Block = require("./Block");

class Blockchain {
    constructor() {
        // Create chain and transaction
        this.chain = [];
        this.current_transactions = [];
        this.pow;
    }

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
            console.log(block.hash);
        }


        this.current_transactions = []
        this.chain.push(block)
        return block;
    }

}

module.exports = Blockchain;