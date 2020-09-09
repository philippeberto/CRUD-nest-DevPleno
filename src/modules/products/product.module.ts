import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { MySQLProvider } from 'src/database/mysql.provider'

@Module({
  controllers: [ProductController],
  providers: [MySQLProvider, ProductService],
})
export class ProductModule {}
