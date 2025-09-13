const paymentRouter = require('express').Router();
const {getProducts} = require('../controllers/PaymentController');
paymentRouter.get('/getProducts', getProducts);
module.exports = paymentRouter;