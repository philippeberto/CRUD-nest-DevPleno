import { Injectable, Logger } from '@nestjs/common'

@Injectable()
export class MySQLProvider {
  private readonly logger: Logger //permite alteração do valor apenas no construtor
  constructor() {
    this.logger = new Logger('MySQLProvider')
    this.logger.log('Initialized!')
  }
}
