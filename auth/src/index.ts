import express, { json, urlencoded } from 'express';

const app = express();
app.use(json() && urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Auth service running on port 3000');
});
