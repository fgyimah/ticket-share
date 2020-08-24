import express, { json, urlencoded } from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/api/users', currentUserRouter);
app.use('/api/users', signinRouter);
app.use('/api/users', signupRouter);
app.use('/api/users', signoutRouter);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to mongodb');
  } catch (error) {
    console.error(error);
  }
  app.listen(3000, () => {
    console.log('Auth service running on port 3000');
  });
};
start();
