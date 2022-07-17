const collectionsRouter = require('./collections');
const homeRouter = require('./home');
const productsRouter = require('./products');
const cartRouter = require('./cart');

function route(app){
    app.use('/collections', collectionsRouter);
    app.use('/cart', cartRouter);
    app.use('/products', productsRouter);
    app.use('/', homeRouter)
}

module.exports = route;
