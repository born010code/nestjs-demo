import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseIntPipe
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { Product } from './products.entity';
import { CreateProductParams } from './utils/types';
import { CreateProductDto } from './dtos/CreateProduct.dto';
import { UpdateProductDto } from './dtos/UpdateProduct.dto';

import { DBAPIService } from './../helpers/DBAPI/DBAPI.service';


@Controller('products')
export class ProductsController {
  constructor(
    private readonly DBAPIService: DBAPIService,
    private readonly productsService: ProductsService
  ) {}

  @Post()
    create(
      @Body() createProductDto: CreateProductDto
    ) {
      return this.productsService.create(createProductDto);
    }

  @Get()
    async findAll() {
      const products = await this.productsService.find({
        where: {}
      });
      return products;
    }

  @Get(':id')
    async getProduct(@Param('id', ParseIntPipe) id: number) {
      const result = await this.productsService.findOne({
        where: { id: id}
      });

      if ( !result ) {
        return {
          'error': true,
          'message': 'Record not found!'
        }
      }

      return {
        'error': false,
        'message': 'Successful',
        'data': result
      }
    }

  @Patch(':id')
    async updateProduct(
      @Param('id') id: number,
      @Body() updateProductDto: UpdateProductDto,
    ) {
      const result = await this.productsService.update(id, updateProductDto);

      return {
        'error': false,
        'message': 'Record has been updated.',
      }
    }

  @Delete(':id')
    async delete(
      @Param('id', ParseIntPipe) id: number,
    ) {
      const result = await this.productsService.delete(id);

      return {
        'error': false,
        'message': 'Record has been deleted.',
      }
    }
}
