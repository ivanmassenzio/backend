const Contenedor = require('./contenedor')
const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id4 = await contenedor.save({ title: "cartuchera", price: 500 });

  console.log(id4); // 4

  const id2 = await contenedor.getById(2);
  console.log(id2); // { title: 'Lapicera', price: 100, id: 2 }

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
  /**
     * [
        { title: 'Regla', price: 20.5, id: 1 },   
        { title: 'Cuaderno', price: 200, id: 3 }, 
        { title: 'cartuchera', price: 500, id: 4 }
        ]
    */

//   await contenedor.deleteAll();
};

main();