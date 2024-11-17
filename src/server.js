import 'dotenv/config';
import cors from 'cors';
import pino from 'pino-http';
import express from 'express';
import { initMongoConnection } from './db/initMongoConnection.js';

import Contact from './models/contact.js';

const app = express();

app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

app.use(cors());
app.use(express.json());

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();

  res.send({ status: 200, data: contacts });
});

app.get('/contacts/:id', async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (contact === null) {
    return res.status(404).send({ status: 404, message: 'Contact not found' });
  }

  res.send({ status: 200, data: contact });
});

app.use((req, res, next) => {
  res.status(404).send({ status: 404, message: 'Not found' });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send({ status: 500, message: 'Internal server error' });
});

async function setupServer() {
  try {
    await initMongoConnection();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

setupServer();