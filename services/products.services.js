import { faker } from "@faker-js/faker";
import boom from "@hapi/boom";

class ProductsService {
  #products = [];
  constructor() {
    this.#products = [];
  }
  lenght() {
    return this.#products.length;
  }
  generate(limit) {
    for (let index = 0; index < limit; index++) {
      this.#products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        url: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create({ name = "", price = "0.00" }) {
    const product = {
      id: faker.datatype.uuid(),
      name,
      price,
      url: faker.image.imageUrl(),
    };
    this.#products.push(product);
    return product;
  }
  
  async find() {
    return this.#products;
  }

  async finOne(id) {
    const product = this.#products.find((item) => item.id === id);
    if (!product) throw boom.notFound("Product not found");
    if (product.isBlock) throw boom.conflict("product is block");
    return product;
  }
  async update(id, changes) {
    const index = this.#products.findIndex((item) => item.id === id);
    if (index === -1) throw boom.notFound("Product not found");
    const product = this.#products[index];
    if (product.isBlock) throw boom.conflict("product is block");
    this.#products[index] = {
      ...product,
      ...changes,
    };
    return this.#products[index];
  }
  async delete(id) {
    // this.#products.filter((item) => item.id !== id);
    const index = this.#products.findIndex((item) => item.id === id);
    if (index === -1) return false;
    this.#products.splice(index, 1);
    return true;
  }
}

export default ProductsService;
