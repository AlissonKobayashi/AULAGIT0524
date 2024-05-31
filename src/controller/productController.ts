import { Request, Response } from 'express';
import  ProductModel  from '../model/productModel';
import { ProductException } from '../exception/productException';
import { validateOrReject } from 'class-validator';
import { ProductDtos } from '../dtos/productDtos';


export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ error: 'Error' });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) throw new ProductException('Product not found');
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ error: 'Error' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) throw new ProductException('Product not found');
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ error: 'Error' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (!product) throw new ProductException('Product not found');
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ error: 'Error' });
  }
};