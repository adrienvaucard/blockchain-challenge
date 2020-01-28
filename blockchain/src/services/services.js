class Services {
  constructor() { }
  // BlockChain Methods

  // retrieve the whole blockchain
  getBlockchain() {
    const publicBlockChain = blockChain.chain;
    return publicBlockChain;
  };

  sendBlock(axios, block, peers) {
    axios.post('/block', {
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
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  // Add Block to the blockchain
  // async addBlock() {
  //   const lastBlock = blockChain.chain[blockChain.chain.length - 1];
  //   pdfParser.pdfExtract('./pdfs/content.pdf', lastBlock.last_page, lastBlock.last_page + 4).then(function (result) {
  //     blockChain.newBlock(lastBlock.hash, result, 0, last.last_page);
  //     console.log(blockChain.chain);
  //   }, function (error) {
  //     console.log(error);
  //   });
  // }


}


module.exports = Services;
