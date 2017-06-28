import * as express from 'express';
import * as path from 'path';
import { Server as HttpServer } from 'http';
import { Server as WsServer} from 'ws';
import { getIdols, getIdolById, getReviewsByIdolId } from './model';

const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'client')));
app.use('/node_modules', express.static(path.resolve(__dirname, '..', 'node_modules')));

app.get('/idols', (req, res) => {
  res.json(getIdols(req.query));
});

app.get('/idols/:idolId', (req, res) => {
  res.json(getIdolById(parseInt(req.params.idolId)));
});

app.get('/idols/:idolId/reviews', (req, res) => {
  res.json(getReviewsByIdolId(parseInt(req.params.idolId)));
});

const httpServer: HttpServer = app.listen(8000, 'localhost', () => {
  const { address, port } = httpServer.address();
  console.log(`Listening on ${address} ${port}`);
});


// WebSocket Server
const wsServer: WsServer = new WsServer({ server: httpServer });

wsServer.on('connection', ws => {
  ws.on('message', (message: any) => {
    let subscriptionRequest = JSON.parse(message);
    subscrivetoIdolBids(ws, subscriptionRequest.idolId)
  })
});

const subscriptions = new Map<any, number[]>();

function subscrivetoIdolBids(client, idolId: number): void {
  let idols = subscriptions.get(client) || [];
  subscriptions.set(client, [...idols, idolId]);
}

setInterval(() => {
  generateNewBids();
  broadcastNewBidsToSubscribers();
}, 2000);

const currentBids = new Map<number, number>();

function generateNewBids() {
  getIdols().forEach(i => {
    const currentBid = currentBids.get(i.id) || i.height;
    const newBid = random(currentBid, currentBid + 5);
    currentBids.set(i.id, newBid);
  });
}

function broadcastNewBidsToSubscribers() {
  subscriptions.forEach((idols: number[], ws: WebSocket) => {
    if (ws.readyState === 1) {
      let newBids = idols.map(iId => ({
        idolId: iId,
        bid: currentBids.get(iId)
      }));
      ws.send(JSON.stringify(newBids));
    } else {
      subscriptions.delete(ws);
    }
  });
}

function random(low: number, high: number): number {
  return Math.random() * (high - low) + low;
}
