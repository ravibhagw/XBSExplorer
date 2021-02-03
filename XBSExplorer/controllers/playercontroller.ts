import express = require('express');
import bodyParser = require('body-parser');

//const paginate = require('express-paginate');
const staticData = require('../data'); 
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    // Happy path only :)
    let pageNumber = parseInt(<string>(req.query.page));
    let pageSize = parseInt(<string>(req.query.limit));
    
    if (!pageNumber && !pageSize) {
        res.json({
            "data": staticData.Player,
            "pageNumber": "0",
            "pageSize": "0"
        });
    }
    else {
        res.json({
            "data": staticData.Player.slice(pageNumber * pageSize, (pageNumber * pageSize) + pageSize),
            "pageNumber": pageNumber,
            "pageSize": pageSize
        });
    }
});


router.get('/:gamertag', (req, res) => {
    let data = staticData.Player.filter(x => { return x.Gamertag == req.params.gamertag; });
    res.send(data);
});

export default router;