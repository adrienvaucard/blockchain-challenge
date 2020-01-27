var SHA256 = require("crypto-js/sha256");

class Block {
    block_id;
    previous_hash;
    records;
    contributor_id;
    hash;

    constructor(block_id, previous_hash, records, contributor_id) {
        this.block_id = block_id;
        this.previous_hash = previous_hash;
        this.records = records;
        this.contributor_id = contributor_id;

        const block_values = {
            block_id: block_id,
            previous_hash: previous_hash,
            records: records,
            contributor_id: contributor_id,
        }

        this.hash = SHA256(JSON.stringify(block_values));
        console.log(hash);
    }
}

module.exports = Block;