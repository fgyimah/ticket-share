import { Router } from 'express';

const router = Router();

router.post('/signout', (req, res) => {
  req.session = null;

  res.sendStatus(204);
});

export { router as signoutRouter };
