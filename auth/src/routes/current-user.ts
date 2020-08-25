import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/currentuser', (req, res) => {
  if (!req.session?.jwt) {
    return res.json({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET!);
    res.json({ currentUser: payload });
  } catch (error) {
    res.json({ currentUser: null });
  }
});

export { router as currentUserRouter };
