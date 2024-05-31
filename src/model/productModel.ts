import { Schema, model } from 'mongoose';

interface IProduct {
  name: string;
  value: number;
  quantity: number;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default model<IProduct>('Product', productSchema);