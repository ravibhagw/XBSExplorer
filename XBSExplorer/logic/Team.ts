class Team {
    season: string;
    teamName: string;
    teamAbbreviation: string;
    gamesPlayed: number;
    goalsFor: number;
    goalsAgainst: number;
    hits: number;
    pim: number;
    shots: number;
    wins: number;
    losses: number;
    otLosses: number;
    points: number;

    constructor(
        season: string,
        teamName: string,
        teamAbbreviation: string,
        gamesPlayed: number,
        goalsFor: number,
        goalsAgainst: number,
        hits: number,
        pim: number,
        shots: number,
        wins: number,
        losses: number,
        otLosses: number,
        points: number) {

        this.season = season;
        this.teamName = teamName;
        this.teamAbbreviation = teamAbbreviation;
        this.gamesPlayed = gamesPlayed;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.hits = hits;
        this.pim = pim;
        this.shots = shots;
        this.wins = wins;
        this.losses = losses;
        this.otLosses = otLosses;
        this.points = points;
    }
}

export = Team;