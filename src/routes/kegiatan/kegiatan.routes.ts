import { Router } from 'express';
import { getKegiatan } from '@/controller/contact/kegiatan.controller';

const router = Router();

router.get('/', getKegiatan);

export default router;
