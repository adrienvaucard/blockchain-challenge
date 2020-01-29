const SHA256 = require("crypto-js/sha256");
const Block = require('../models/Block');


class Services {
  constructor() { }
  // BlockChain Methods

  // Send Block to POST Route of other peers
  sendBlock(axios, block, peers) {

    for (let i = 0; i < peers.length; i++) {
      axios.post('localhost:' + peers[i].env.PORT + '/block', {
        index: block.index,
        previous_hash: block.previous_hash,
        records: block.records,
        contributor_id: block.contributor_id,
        last_page: block.last_page,
        nonce: block.nonce,
        timestamp: block.timestamp,
        hash: block.hash
      })
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        });
    }
  }

  // Validate a block by its SHA256
  validateBlock(block) {
    const block = new Block(
      block.index,
      block.previous_hash,
      block.records,
      block.contributor_id,
      block.last_page,
      block.nonce,
      block.timestamp
    )

    const validateHash = SHA256(JSON.stringify(block)).toString();

    if (block.hash == validateHash) {
      return true;
    } else {
      return false;
    }
  }

  checkDuplicate(blockChain, block) {
    blockChain.forEach(blockC => {
      if (blockChain.index == block.index) {
        return true;
      }
    });
    return false;
  }
}


module.exports = Services;
