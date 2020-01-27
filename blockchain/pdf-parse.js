var pdfjs = require("pdfjs-dist");

const pdfExtract = async (pdfPath, page) => {

    // Get Document
    return pdfjs.getDocument(pdfPath).then(function (pdf) {
        // Get Page by ID
        var pages = [];
        pages.push(page);
        
        // Return content of all pages
        return Promise.all(pages.map(function (pageNumber) {
            return pdf.getPage(pageNumber).then(function (page) {
                return page.getTextContent().then(function (textContent) {
                    return textContent.items.map(function (item) {
                        return item.str;
                    }).join(' ');
                });
            });
        })).then(function (pages) {
            return pages.join("\r\n");
        });
    });
}



pdfExtract('./pdfs/content.pdf', 1).then(function(result) {
    console.log(result);
});