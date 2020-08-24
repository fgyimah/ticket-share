import { Router } from 'express';

const router = Router();

router.post('/signout', (_req, res) => {
  res.send('hi there');
});

export { router as signoutRouter };
