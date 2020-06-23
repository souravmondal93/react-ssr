import express from 'express';
import renderer from './client/helpers/renderer';

const app = express();

const SERVER_PORT = 3000;

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.status(200).send(renderer());
});

app.listen(SERVER_PORT, () => {
  console.log(`Server started. Listening to port: ${SERVER_PORT}`);
});
