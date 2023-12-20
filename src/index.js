import express from "express";
import data from "./store.js";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get('/radnici', (req, res) => {
  res.json(data.radnici)
});
app.get('/radnik/:id', (req, res) => {
  res.json(data.radnici.find(x => x.id == req.params.id))
});
app.post('/radnici', (req, res) => {
  const newRadnik = req.body;
  data.radnici.push(newRadnik);
  res.status(201).json({ message: 'Novi radnik je uspiješno kreiran', radnik: newRadnik });
});
app.delete('/radnik/:id', (req, res) => {
  const id = req.params.id;
  const radnikIndex = data.radnici.findIndex(x => x.id == id);
  if (radnikIndex !== -1) {
    const deletedRadnik = data.radnici.splice(radnikIndex, 1)[0];
    res.json({ message: 'Radnik deleted successfully', radnik: deletedRadnik });
  } else {
    res.status(404).json({ message: 'Radnik not found' });
  }
});
app.get('/gosti', (req, res) => {
  res.json(data.gosti);
});
app.get('/gost/:id', (req, res) => {
  res.json(data.gosti.find(x => x.id == req.params.id))

});
app.post('/gosti', (req, res) => {
  const newGost = req.body;
  data.gosti.push(newGost);
  res.status(201).json({ message: 'Novi Gost je uspiješno kreiran', gost: newGost });
});
app.delete('/gost/:id', (req, res) => {
  const id = req.params.id;
  const gostIndex = data.gosti.findIndex(x => x.id == id);
  if (gostIndex !== -1) {
    const deletedGost = data.radnici.splice(gostIndex, 1)[0];
    res.json({ message: 'Gost deleted successfully', gost: gostIndex });
  } else {
    res.status(404).json({ message: 'Gost not found' });
  }
});
app.get('/rezervacije', (req, res) => {
  res.json(data.rezervacija);
});

app.get('/rezervacije/:gostId', (req, res) => {
  const gostId = req.params.gostId;
  const results = data.rezervacija.filter(reservation => reservation.gost.id === gostId);
  res.json(results);
});
app.get('/rezervacija/:id', (req, res) => {
  const id = req.params.id;

  const result = data.rezervacija.find(x => x.id == id);
  res.json(result);
});
app.post('/rezervacije', (req, res) => {
  const newRezervacija = req.body;
  data.rezervacija.push(newRezervacija);
  res.status(201).json({ message: 'Nova rezervacija je uspiješno kreirana', rezervacija: newRezervacija });
});
app.delete('/rezervacija/:id', (req, res) => {
  const id = req.params.id;
  const rezervacijaIndex = data.rezervacija.findIndex(x => x.id == id);
  if (rezervacijaIndex !== -1) {
    const deletedRezervacija = data.rezervacija.splice(rezervacijaIndex, 1)[0];
    res.json({ message: 'Rezervacija deleted successfully', rezervacija: rezervacijaIndex });
  } else {
    res.status(404).json({ message: 'Rezervacija not found' });
  }
});
app.patch('/rezervacije/:id', (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const rezervacijaIndex = data.rezervacija.findIndex(x => x.id == id);

  if (rezervacijaIndex !== -1) {

    data.rezervacija[rezervacijaIndex] = { ...data.rezervacija[rezervacijaIndex], ...updateData };

    res.json({ message: 'Rezervacija updated successfully', rezervacija: data.rezervacija[rezervacijaIndex] });
  } else {
    res.status(404).json({ message: 'Rezervacija not found' });
  }
});



app.listen(port, () => {
  console.log(`Servis radi na portu ${port}`);
});