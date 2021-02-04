import express = require('express');
import bodyParser = require('body-parser');
import Team = require('../logic/Team');
import PagedResponse = require('../logic/PagedResponse');
import ArrayPaginator = require('../logic/ArrayPaginator');


//const paginate = require('express-paginate');
const staticData = require('../teamdata');
const data: Team[] = staticData.StatsTeam.map(x => new Team
    (
        x.Season, x.TeamName, x.TeamAbbreviation, x.GamesPlayed, x.GoalsFor, x.GoalsAgainst, x.Hits, x.PIM, x.Shots, x.Wins, x.Loss, x.OTL, x.Points
));


const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// This method is exactly the same between playercontroller and teamcontroller.... how can I reuse the logic?
router.get('/', (req, res) => {
    let page = parseInt(<string>(req.query.page));
    let limit = parseInt(<string>(req.query.limit));

    res.json(new PagedResponse(
        ArrayPaginator.prototype.paginate(data, page, limit),
        page,
        limit
    ));
});

router.get('/compare', (req, res) => {
    // Happy path only :)
    let team1Abbrev = <string>req.query.player1;
    let team2Abbrev = <string>req.query.player2;

    let team1 = data.find(x => { return x.teamAbbreviation == team1Abbrev });
    let team2 = data.find(x => { return x.teamAbbreviation == team2Abbrev });

    // Cheap hack
    res.json({
        "team1":
        {
            "data": team1,
        },
        "team2":
        {
            "data": team2,
        }
        //"diff": parseInt(player1.forumId) - parseInt(player2.forumId)
    })

});

router.get('/:teamAbbrev', (req, res) => {
    let team = data.find(x => { return x.teamAbbreviation == req.params.teamAbbrev; });
    res.send(team);
});

export default router;