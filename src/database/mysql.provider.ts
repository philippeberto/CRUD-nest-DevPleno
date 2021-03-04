import { Injectable, Logger } from '@nestjs/common'
import { Connection, createPool, Pool } from 'mysql2/promise'

@Injectable()
export class MySQLProvider {
  private readonly logger: Logger //permite alteração do valor apenas no construtor
  private readonly pool: Pool
  constructor() {
    this.logger = new Logger('MySQLProvider')
    this.logger.log('Initialized!')
    this.pool = createPool({
      host: 'localhost',
      user: 'root',
      database: 'DevShop',
      waitForConnections: true,
      connectionLimit: 20,
      queueLimit: 0
    })
  }
  async getConnection(): Promise<Connection> {
    return await this.pool.getConnection()
  }
} 
