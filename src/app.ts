import express from 'express';
import router from './router';

const app = express();
app.use(express.json());

app.get('/', async (_req, res) => {
  console.log('Hello world!');
  res.status(200).send('Hello world!');

});

app.use(router);

if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }

export default app;