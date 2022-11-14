const products = [
    {
        id: 1,
        title: 'Pizza',
        price: 100,
        thumbnail: 'https://fotos.perfil.com/2022/02/09/trim/950/534/pizza-1310709.jpg'
    },
    {
        id: 2,
        title: 'Ensalada',
        price: 80,
        thumbnail: 'https://t1.rg.ltmcdn.com/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.webp'
    }

];

class ProductModel {
    constructor() {
        this.products = products;
    }

    save(product) {
        product.id = this.getId();
        this.products.push(product)
        return product;
    }

    getById(id) {
        const product = this.products.find((item) => item.id === parseInt(id));
        if (!product)
            return null;
        return product;
    }

    getAll() {        
        return this.products;
    }

    getId() {
        const lastProduct = this.products[this.products.length - 1];
        const lastId = lastProduct.id;
        return lastId + 1;
    }

    deleteById(id) {
        const productIndex = this.products.findIndex((item) => item.id === parseInt(id));
        this.products.splice(productIndex, 1)        ;
        return;
    }

    deleteAll() {
        this.products = [];
        return;
    }

    update(id, body) {
        const productIndex = this.products.findIndex((item) => item.id === parseInt(id));
        this.products.splice(productIndex, 1, body);
    }
}

module.exports = ProductModel;