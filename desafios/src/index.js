const { response } = require('express');
const userRouter = require('./routers/users');
const productRouter = require('./routers/products');
const express = require('express');
const logRequestInfo = require('./middlewares/logRequestInfo');
const app = express();
const port = 3010;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/api/users', logRequestInfo, userRouter)
app.use('/api/products', logRequestInfo, productRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
