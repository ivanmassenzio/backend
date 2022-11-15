const { Router } = require('express');
const ProductModel = require('../models/ProductModel');
const productRouter = Router();

const productModel = new ProductModel();


productRouter.get('/:id', (req, res) => {
    const product = productModel.getById(req.params.id);
    if(product == null) {
        res.json({error: 'producto no encontrado'})
    } else {
        res.json({product});
    }
});

productRouter.get('/', (req, res) => {
    const products = productModel.getAll();    
    res.render('pages/form', {products})
});

productRouter.post('/', (req, res) => {
    productModel.save(req.body);
    console.log(req.body)
    res.redirect('/api/products');
});

productRouter.put('/:id', (req, res) => {
    productModel.update(req.params.id, req.body)
    res.json({ message: 'producto actualizado' });
});

productRouter.delete('/:id', (req, res) => {    
    const product = productModel.deleteById(req.params.id);
    res.json({ message: 'producto borrado' });
});

module.exports = productRouter;