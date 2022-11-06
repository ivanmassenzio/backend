const { response } = require('express');
const userRouter = require('./routers/users');
const express = require('express');
const logRequestInfo = require('./middlewares/logRequestInfo');
const app = express();
const port = 3010;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', logRequestInfo, userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
