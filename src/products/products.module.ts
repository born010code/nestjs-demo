import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './products.controller';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

import { DBAPIService } from './../helpers/DBAPI/DBAPI.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [ProductsService, DBAPIService],
})
export class ProductsModule {}
