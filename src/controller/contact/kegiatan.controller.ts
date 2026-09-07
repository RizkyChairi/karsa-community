import { Request, Response } from 'express';
import { db } from '../../db/db';
import { messagesTable } from '../../db/schema';
import { activities } from '@/data/Kegiatan';

export const getKegiatan = async (req: Request, res: Response) => {
  try {
    const kegiatan = await db
      .select()
      .from(messagesTable);

    res.status(200).json({
      success: true,
      data: activities,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data pendaftar.',
    });
  }
};
