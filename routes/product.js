const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

router.get('/', (req,res)=> {
    Product.find().
        then((products)=> {
            res.json(products);
        }).
        catch((err) => {
            res.json(err);
        });
});

router.get('/:id', (req,res)=> {
    Product.findById(req.params.id).
    then((products)=> {
        res.json(products);
    }).
    catch((err) => {
        res.json(err);
    });
});

router.post('/', (req,res)=> {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        user: req.userId,
    })
    product.save();
    res.json(product);
});

router.put('/:id', (req,res)=> {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).
    then((products)=> {
        res.json(products);
    }).
    catch((err) => {
        
    });


    
});

router.delete('/:id', (req,res)=> {
    Product.findByIdAndDelete(req.params.id).
        then((products) => {
            res.json(products);
        }).
        catch((err) => {
            res.json(err);
        });
});



module.exports = router;