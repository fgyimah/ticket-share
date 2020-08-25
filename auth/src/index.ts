import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('Jwt secret is undefined!');
  }
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
