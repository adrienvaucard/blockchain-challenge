class Services {
    constructor() {}
    // BlockChain Methods

    // retrieve the whole blockchain
    async getBlockchain() {
        const publicBlockChain = blockChain.chain;
        return publicBlockChain;
    };

    // Add Block to the blockchain
    async addBlock(nonce) {
        const lastBlock = blockChain.chain[blockChain.chain.length-1];
        pdfParser.pdfExtract('./pdfs/content.pdf', lastBlock.last_page, lastBlock.last_page + 4).then(function (result) {
            blockChain.newBlock(lastBlock.hash, result, 0, last.last_page,nonce);
            console.log(blockChain.chain);
          });
    }
}


module.exports = Services;
