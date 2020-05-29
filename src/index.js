const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const discs = [];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Retrieve all discs
app.get('/', (req, res) => {
  const ds = discs.map(d => ({
    id: d.id,
    name: d.name,
    description: d.description,
    flightNumbers: d.flightNumbers,
  }));
  res.send(ds);
});

// retreive a specific disc
app.get('/:id', (req, res) => {
  const disc = discs.filter(d => (d.id === parseInt(req.param.id)));
  if (disc.length > 1) return res.status(500).send();
  if (disc.length === 0) return res.status(404).send();
  res.send(question[0]);
});

// insert a new disc
app.post('/', (req, res) => {
  const { name, description, flightNumbers } = req.body;
  const newDisc = {
    id: discs.length + 1,
    name,
    description,
    flightNumbers,
  };
  discs.push(newDisc);
  res.status(200).send();
});

// update flight numbers to a disc
app.post('/disc/:id', (req, res) => {
  const { flightNumbers } = req.body;

  const disc = discs.filter(d => (d.id === parseInt(req.params.id)));
  if (disc.length > 1) return res.status(500).send();
  if (disc.length === 0 ) return res.status(404).send();

  disc[0].flightNumbers = flighteNumbers;

  res.status(200).send();
});
  //start the server
app.listen(8081, () => {
  console.log('listening on port 8081')
});
