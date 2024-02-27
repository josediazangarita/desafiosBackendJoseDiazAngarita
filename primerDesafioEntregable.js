console.log("Primer desafío entregable de José Gregorio Díaz Angarita")

class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    addProduct(product) {
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.log("Error: Está intentando ingresar un producto con campos faltantes, ingrese el campo o los campos faltantes y reinténtelo");
            return;
        }

        if (this.products.some(p => p.code === product.code)) {
            console.log("Error: El código del producto que intenta ingresar ya existe, asígnele otro código.");
            return;
        }

        product.id = this.productIdCounter++;
        this.products.push(product);
        console.log("Se ha agregado un producto con éxito.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log("Error: No se encuentra el producto con el ID proporcionado.");
        }
        return product;
    }
}

//Proceso de testing 

const store = new ProductManager();

console.log(store);

//Test agregar productos correctamente
store.addProduct({
    title: "Producto 1",
    description: "descripción del producto 1",
    price: 100,
    thumbnail: "imagen1.jpg",
    code: "001",
    stock: 100
});

store.addProduct({
    title: "Producto 2",
    description: "descripción del producto 2",
    price: 200,
    thumbnail: "imagen2.jpg",
    code: "002",
    stock: 200
});

store.addProduct({
    title: "Producto 3",
    description: "descripción del producto 3",
    price: 300,
    thumbnail: "imagen3.jpg",
    code: "003",
    stock: 300
});

console.log(("Obtener totalidad de productos:"), store.getProducts());

//Test agregar un producto con campo faltante
store.addProduct({
    title: "Producto 4",
    description: "descripción del producto 4",
    price: 400,
    //thumbnail: "imagen4.jpg",
    code: "004",
    stock: 400
});

//Test agregar un producto con código existente
store.addProduct({
    title: "Producto 5",
    description: "descripción del producto 5",
    price: 500,
    thumbnail: "imagen5.jpg",
    code: "001",
    stock: 500
});

//Obtener productos por su ID
console.log(("Obtener producto por ID:"), store.getProductById(2));
console.log(("Obtener producto por ID:"), store.getProductById(3));
console.log(("Obtener producto por ID:"), store.getProductById(20));

