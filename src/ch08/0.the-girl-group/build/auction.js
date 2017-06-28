"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
var model_1 = require("./model");
var app = express();
app.use('/', express.static(path.resolve(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.resolve(__dirname, '..', 'node_modules')));
app.get('/idols', function (req, res) {
    res.json(model_1.getIdols(req.query));
});
app.get('/idols/:idolId', function (req, res) {
    res.json(model_1.getIdolById(parseInt(req.params.idolId)));
});
app.get('/idols/:idolId/reviews', function (req, res) {
    res.json(model_1.getReviewsByIdolId(parseInt(req.params.idolId)));
});
var httpServer = app.listen(8000, 'localhost', function () {
    var _a = httpServer.address(), address = _a.address, port = _a.port;
    console.log("Listening on " + address + " " + port);
});
// WebSocket Server
var wsServer = new ws_1.Server({ server: httpServer });
wsServer.on('connection', function (ws) {
    ws.on('message', function (message) {
        var subscriptionRequest = JSON.parse(message);
        subscrivetoIdolBids(ws, subscriptionRequest.idolId);
    });
});
var subscriptions = new Map();
function subscrivetoIdolBids(client, idolId) {
    var idols = subscriptions.get(client) || [];
    subscriptions.set(client, idols.concat([idolId]));
}
setInterval(function () {
    generateNewBids();
    broadcastNewBidsToSubscribers();
}, 2000);
var currentBids = new Map();
function generateNewBids() {
    model_1.getIdols().forEach(function (i) {
        var currentBid = currentBids.get(i.id) || i.height;
        var newBid = random(currentBid, currentBid + 5);
        currentBids.set(i.id, newBid);
    });
}
function broadcastNewBidsToSubscribers() {
    subscriptions.forEach(function (idols, ws) {
        if (ws.readyState === 1) {
            var newBids = idols.map(function (iId) { return ({
                idolId: iId,
                bid: currentBids.get(iId)
            }); });
            ws.send(JSON.stringify(newBids));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}
function random(low, high) {
    return Math.random() * (high - low) + low;
}
