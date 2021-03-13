import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log('Server was started');
});
