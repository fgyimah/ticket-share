import express, { json, urlencoded } from 'express';

import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/users', currentUserRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signupRouter);
app.use('/api/users', signoutRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Auth service running on port 3000');
});
