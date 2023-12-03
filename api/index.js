import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import bakeRoutes from './routes/bakerys.js';
import vegRoutes from './routes/vegetables.js';
import meatRoutes from './routes/meats.js';
import bevRoutes from './routes/beverages.js';
import dairyRoutes from './routes/dairys.js';
import cartRoutes from './routes/carts.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/bakerys', bakeRoutes);
app.use('/api/vegetables', vegRoutes);
app.use('/api/meats', meatRoutes);
app.use('/api/beverages', bevRoutes);
app.use('/api/dairys', dairyRoutes);
app.use('/api/carts', cartRoutes);

app.listen(8800, () => {
  console.log('Connected!');
});
