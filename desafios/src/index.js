const { response } = require('express');
const { Server: SocketServer } = require('socket.io');
const { Server: HttpServer } = require('http');
const userRouter = require('./routers/users');
const express = require('express');
const logRequestInfo = require('./middlewares/logRequestInfo');
const ProductModel = require('./models/ProductModel');

const app = express();
const port = 3010;

const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

const productModel = new ProductModel();

io.on('connection', (socket) => {
  console.log('socket id: ', socket.id)
  socket.emit('products', productModel.getAll());
  // socket.emit('message', 'Este es mi mensaje desde el servidor')
  // socket.on('notification', (data) => {
  //   console.log(data)
  //   io.sockets.emit('messages', data)
  // })
  // socket.on('new-message', (newMessage) => {
  //   console.log({newMessage});
  //   io.sockets.emit('chat-update', newMessage)
  // })
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/api/products/:id', (req, res) => {
  const product = productModel.getById(req.params.id);
  if(product == null) {
      res.json({error: 'producto no encontrado'})
  } else {
      res.json({product});
  }
});

app.get('/api/products', (req, res) => {    
  const products = productModel.getAll();    
  res.render('pages/form', {products})
});

app.post('/api/products', (req, res) => {
  productModel.save(req.body);
  console.log(req.body)
  io.sockets.emit('products', productModel.getAll());
  res.redirect('/api/products');
});

app.put('/api/products/:id', (req, res) => {
  productModel.update(req.params.id, req.body)
  res.json({ message: 'producto actualizado' });
});

app.delete('/api/products/:id', (req, res) => {    
  const product = productModel.deleteById(req.params.id);
  res.json({ message: 'producto borrado' });
});



httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
