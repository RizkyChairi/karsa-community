import { Request, Response } from 'express';
import { db } from '../../db/db';
import { messagesTable } from '../../db/schema';

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await db
      .select()
      .from(messagesTable);

    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data pendaftar.',
    });
  }
};

export const createContact = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      message,
    } = req.body;

    // Validasi
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Semua data wajib diisi.',
      });
    }

    // Simpan ke database
    await db.insert(messagesTable).values({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Form berhasil dikirim.',
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Gagal mengirim form.',
    });
  }
};