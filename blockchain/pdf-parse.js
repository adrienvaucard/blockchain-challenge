var pdfjs = require("pdfjs-dist");

class PdfParser {
    constructor() {}
    
    async pdfExtract (pdfPath, startPage, endPage) {

        // Get Document
        return pdfjs.getDocument(pdfPath).then(function (pdf) {
            // Get Page by ID
            var pages = [];
            for (var i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            // Return content of all pages
            return Promise.all(pages.map(function (pageNumber) {
                return pdf.getPage(pageNumber).then(function (page) {
                    return page.getTextContent().then(function (textContent) {
                        return textContent.items.map(function (item) {
                            return item.str;
                        }).join(';');
                    });
                });
            })).then(function (pages) {
                return pages;
            });
        });
    }
}

module.exports = PdfParser;

