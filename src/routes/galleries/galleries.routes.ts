import { Router } from 'express';
import { getgalliries } from '@/controller/galleries.controller';

const router = Router();

router.get('/', getgalliries);

export default router;
