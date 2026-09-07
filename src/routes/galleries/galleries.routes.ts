import { Router } from 'express';
import { getgalliries } from '@/controller/contact/galleries.controller';

const router = Router();

router.get('/', getgalliries);

export default router;
