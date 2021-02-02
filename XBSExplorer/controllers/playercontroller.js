"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const staticData = require('../data');
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/', (req, res) => {
    res.send(staticData.Player);
});
router.get('/:gamertag', (req, res) => {
    let data = staticData.Player.filter(x => { return x.Gamertag == req.params.gamertag; });
    res.send(data);
});
exports.default = router;
//# sourceMappingURL=playercontroller.js.map