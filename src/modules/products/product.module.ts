import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { ProductResolver } from './products.resolver'

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductResolver],
})
export class ProductModule { }
