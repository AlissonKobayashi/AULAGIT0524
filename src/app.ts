import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/products');

app.use(express.json());
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});