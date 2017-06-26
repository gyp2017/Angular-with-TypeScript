import * as express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello from Express'));
app.get('/products', (req, res) => res.send('Got a requst for products'));
app.get('/reviews', (req, res) => res.send('Got a requst for reviews'));

const server = app.listen(8000, 'localhost', () => {
  const { address, port } = server.address();
  console.log(`Listening on ${address} ${port}`);
});
