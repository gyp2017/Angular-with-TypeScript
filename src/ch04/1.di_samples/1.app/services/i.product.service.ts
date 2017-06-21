// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
// }

export class Product {
  constructor(public id: number
              public title: string,
              public price: number,
              public description: string) { }
}


export interface IProductService {
  getProduct(): Product;
}
