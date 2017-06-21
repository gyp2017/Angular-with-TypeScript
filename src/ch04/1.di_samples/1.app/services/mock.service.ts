import { Product, IProductService } from './i.product.service';

export class MockService implements IProductService {

  getProduct(): Product {
    return new Product(0, 'Galaxy S8', 849.99, '6.5-inch screen');
  }
}
