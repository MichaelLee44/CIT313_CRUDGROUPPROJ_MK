import { Router } from 'express';
import {
  getAllProducts, getProductDetails,
} from '../controllers/productController.js';

const router = Router();

router.get('/', (req, res) => res.redirect('/products'));

router.get('/products', async (req, res) => {
  const products = await getAllProducts();
  res.render('pages/products', {
    title: 'Products', products,
  });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About' });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact', values: {}, errors: {}, sent: req.query.sent === '1',
  });
});

router.post('/contact', async (req, res) => {
 
});

// Used by the Price & Availability button
router.get('/api/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ error: 'Product id must be a positive whole number.' });
  }
});

export default router;
