import { Product, IProductService } from './i.product.service';

export class ProductService implements IProductService {

  getProduct(): Product {
    return new Product(0, 'iPhone 8', 849.99, '5.8-inch screen');
  }
}
