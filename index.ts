import express from 'express';

import contactRoutes from './src/routes/contact/contact.routes.js';
import KegiatanRoutes from './src/routes/kegiatan/kegiatan.routes.js';
import galleries from './src/routes/galleries/galleries.routes.js';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/api/v1/contact', contactRoutes);
app.use('/api/kegiatan', KegiatanRoutes);
app.use('/api/galleries', galleries);

app.get('/', (req, res) => {
  res.send('Karsa Community API');
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;