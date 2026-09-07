import { Request, Response } from 'express';

import { galleries } from '@/data/galleries';

export const getgalliries = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      data: galleries,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data galleries.',
    });
  }
};