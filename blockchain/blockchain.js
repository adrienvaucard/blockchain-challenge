const Block = require("./block");

class Blockchain {
    constructor () {
      // Create chain and transaction
      this.chain = [];
      this.current_transactions = [];
      this.pow;
    }
  
    newBlock (previous_hash, records, contributor_id) {
      const block = new Block(
        this.chain.length + 1,
        previous_hash,
        records,
        contributor_id,
        new Date(),
      );

      this.current_transactions = []
      this.chain.push(block)
      // console.log(this.chain);
      return block;
    }
  
    newTransaction (sender, recipient, amount) {
    //   this.current_transactions.push({
    //     sender: sender,
    //     recipient: recipient,
    //     amount: amount
    //   })
    //   return this.lastBlock()['index'] + 1
    }
  
    hash (block) {
    //   const blockString = JSON.stringify(block)
    //   const hash = crypto.createHmac(process.env.HASH_TYPE, process.env.CRYPTO_SECRET)
    //   .update(blockString)
    //   .digest('hex')
  
    //   return hash
    }
  
    lastBlock () {
    //   return this.chain.slice(-1)[0]
    }
  }
  
  module.exports = Blockchain;