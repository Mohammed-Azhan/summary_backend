const paymentRouter = require('express').Router();
const authMiddleware = require("../middleware/userMiddleware");
const {getProducts} = require('../controllers/PaymentController');
paymentRouter.get('/getProducts', authMiddleware, getProducts);
module.exports = paymentRouter;