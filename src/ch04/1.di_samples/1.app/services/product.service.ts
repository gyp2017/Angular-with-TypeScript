export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public description: string) {
  }
}

export class ProductService {

  getProduct(): Product {
    return new Product(0, 'iPhone 7', 849.99, '5.8-inch screen');
  }
}
