import express from 'express';

import dotenv from 'dotenv';
import { connectDB } from './services/db';

dotenv.config();

const app = express();

const PORT = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on port ${PORT}`);
});
