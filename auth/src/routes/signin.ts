import { Router } from 'express';

const router = Router();

router.post('/signin', (_req, res) => {
  res.send('hi there');
});

export { router as signinRouter };
