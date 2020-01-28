class Services {
    constructor() {

        this.addBlock = new Promise((resolve, reject) => {

            // Get Last block infos
            const lastBlock = blockChain.chain[blockChain.chain.length - 1];
            console.log(lastBlock);


            // Create new block with previous informations
            pdfParser.pdfExtract('./pdfs/content.pdf', lastBlock.last_page, lastBlock.last_page + 4).then(function (result) {
                const newBlock = blockChain.newBlock(lastBlock.hash, result, lastBlock.contributor_id, lastBlock.last_page);
                resolve(newBlock);
            },
            function(reason) {
                reject(reason);
            });
        });
    }
    // BlockChain Methods

    // retrieve the whole blockchain
    async getBlockchain() {
        const publicBlockChain = blockChain.chain;
        return publicBlockChain;
    };

    // Add Block to the blockchain

}


module.exports = Services;
