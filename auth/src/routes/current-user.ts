import { Router } from 'express';

import { currentUser } from '../middlewares/current-user';

const router = Router();

router.get('/currentuser', currentUser, (req, res) => {
  res.json({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
