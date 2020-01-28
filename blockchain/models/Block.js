var SHA256 = require("crypto-js/sha256");

class Block {

    constructor(index, previous_hash, records, contributor_id, last_page, timestamp) {
        this.index = index;
        this.previous_hash = previous_hash;
        this.records = records;
        this.contributor_id = contributor_id;
        this.last_page = last_page;
        this.timestamp = timestamp;

        const block_values = {
            index: index,
            previous_hash: previous_hash,
            records: records,
            contributor_id: contributor_id,
            last_page: last_page,
            timestamp: timestamp
        }

        this.hash = SHA256(JSON.stringify(block_values)).toString();
    }
}

module.exports = Block;