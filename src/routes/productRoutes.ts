import { Router } from 'express';
import { getProducts, getProduct, updateProduct, deleteProduct } from '../controller/productController';
import { createProduct } from '../controller/createProduct';
import { updateValueMiddleware } from '../middlewares/productMiddlewares';

const router = Router();

router.post('/', updateValueMiddleware, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateValueMiddleware, updateProduct);
router.delete('/:id', deleteProduct);

export default router;