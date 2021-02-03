import express = require('express');
import bodyParser = require('body-parser');
import Player = require('../logic/Player');


//const paginate = require('express-paginate');
const staticData = require('../data'); 
const data: Player[] = staticData.Player.map(x => new Player(x.Gamertag, x.ForumId));
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', (req, res) => {
    // Happy path only :)
    let page = parseInt(<string>(req.query.page));
    let limit = parseInt(<string>(req.query.limit));
    
    if (!page && !limit) {
        res.json({
            "data": data,
            "page": "0",
            "limit": "0"
        });
    }
    else {
        res.json({
            "data": data.slice(page * limit, (page * limit) + limit),
            "pageNumber": page,
            "pageSize": limit
        });
    }
});

router.get('/compare', (req, res) => {
    // Happy path only :)
    let gamertag1 = <string>req.query.player1;
    let gamertag2 = <string>req.query.player2;

    let player1 = data.find(x => { return x.gamertag == gamertag1 });
    let player2 = data.find(x => { return x.gamertag == gamertag2 });

    // Cheap hack until we extract some of the calculations from the data store
    // Comparison logic will eventually move into a class where we can load the data and analyze the player's analytics
    // this endpoint should expose the analytic results of the Comparer
    res.json({
        "player1":
        {
            "data": player1,
            "score": player1.forumId
        },
        "player2":
        {
            "data": player2,
            "score": player2.forumId
        },
        "diff": parseInt(player1.forumId) - parseInt(player2.forumId)
    })
    
});

router.get('/:gamertag', (req, res) => {
    let player = data.find(x => { return x.gamertag == req.params.gamertag; });
    res.send(player);
});

export default router;