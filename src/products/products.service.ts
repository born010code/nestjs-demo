import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductParams, UpdateProductParams } from './utils/types';
import { Product } from './products.entity';
// import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {}

  create(productDetails: CreateProductParams ) {
    const product = this.productRepository.create({...productDetails})
    return this.productRepository.save(product);
  }

  find( params ) {
    return this.productRepository.find( params )
  }

  findOne( params ) {
    return this.productRepository.findOne( params )
  }

  update(id: number, updateProductDetails: UpdateProductParams) {
    return this.productRepository.update(
      {id: id},
      {...updateProductDetails}
    );
  }

  delete(id: number) {
    return this.productRepository.delete({id: id});
  }
}
