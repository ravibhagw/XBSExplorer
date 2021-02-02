import debug = require('debug');
import express = require('express');
import path = require('path');
import players from './controllers/playercontroller';

const app = express();
app.use('/players', players);

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
