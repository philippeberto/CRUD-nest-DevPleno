import { Inject, Injectable } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider'

@Injectable()
export class ProductService {
  constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider) { }
  async findAll(): Promise<any> {
    console.log(this.mysql.getValue())
    return [{ id: 2 }, { id: 1 }, { id: 4 }, { id: 3 }, { id: 5 }]
  }
}
