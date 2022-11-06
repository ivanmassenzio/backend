const { Router } = require('express');
const userRouter = Router()


const database = [
    { id: 0, name: 'coder', email: 'coder@email.com' },
    { id: 1, name: 'coder1', email: 'coder1@email.com' },
    { id: 2, name: 'coder2', email: 'coder2@email.com' },
    { id: 3, name: 'coder3', email: 'coder3@email.com' },
  ];
  



userRouter.get('/', (req, res) => {
    
    res.json(database);
  });
  
userRouter.get('/:id', (req, res) => {
const user = database.find((item) => item.id === parseInt(req.params.id));
console.log(user);
res.json(user);
});

userRouter.post('/', (req, res) => {
    const newUser = {
        id: database.length,
        ...req.body
}
console.log(newUser);

database.push(newUser);
res.json(newUser);
});
  
userRouter.delete('/:id', (req, res) => {
    const userToDeleteIndex = database.findIndex((item) => item.id === parseInt(req.params.id));
    const user = database.splice(userToDeleteIndex, 1);
    console.log(user);
    res.json(user);
});
  

userRouter.put('/:id', (req, res) => {
const userToUpdateIndex = database.findIndex((item) => item.id === parseInt(req.params.id));
const user = database.splice(userToUpdateIndex, 1, req.body);  
res.json({
  result: 'ok',
  id: req.params.id,
  nuevo: req.body
});
});
  
module.exports = userRouter;