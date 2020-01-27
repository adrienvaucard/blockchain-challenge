class Block {
    block_id;
    previous_hash;
    records;
    contributor_id;


    constructor(block_id, previous_hash, records, contributor_id) {
        this.block_id = block_id;
        this.previous_hash = previous_hash;
        this.records = records;
        this.contributor_id = contributor_id;
    }
}