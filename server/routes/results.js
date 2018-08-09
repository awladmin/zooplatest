const mockResponse = require('../mock/mock-response');

const results = (req, res, next) => { 
    let term = '';
    //check for data
    if(req.query.term){
        term = req.query.term.toUpperCase();
        mockResponse.noResults = (!term.length || mockResponse.area != term) ? true : false;
    } else {
        mockResponse.noResults = true;//no term, so test works
    }
    
        
    res.render('results', {
        data: mockResponse,
        title: 'Search Results '+term,
        scriptsrc: '/javascript/search.js'
    });
};

module.exports = results;
