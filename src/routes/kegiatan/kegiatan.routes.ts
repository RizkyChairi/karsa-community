import { Router } from 'express';
import { getKegiatan } from '@/controller/kegiatan.controller';

const router = Router();

router.get('/', getKegiatan);

export default router;
