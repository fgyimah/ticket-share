import { Router } from 'express';

const router = Router();

router.get('/currentuser', (_req, res) => {
  res.send('hi there');
});

export { router as currentUserRouter };