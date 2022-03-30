import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  getProducts():string[]{
    return ["Learning Angular", "ProTypeScript", "ASP.NET"];
  }

  constructor() { }

}