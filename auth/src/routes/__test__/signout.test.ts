import request from 'supertest';
import { app } from '../../app';

it('clears the cookie after signing out', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'fgyimah883@gmail.com', password: 'password' })
    .expect(201);

  const response = await request(app).post('/api/users/signout').expect(204);
  expect(response.get('Set-Cookie')).toHaveLength(1);
});
