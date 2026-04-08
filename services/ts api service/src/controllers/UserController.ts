import { Router } from 'express';
const router = Router();
let users = [];
router.get('/', (req,res)=> res.json(users));
router.post('/', (req,res)=> { users.push(req.body); res.json(req.body); });
export { router as UserController };
