import { Module, Global } from '@nestjs/common';
// import { DBAPIController } from './DBAPI.controller';
import { DBAPIService } from './DBAPI.service';

@Global()
@Module({
  // controllers: [DBAPIController],
  providers: [DBAPIService],
  exports: [DBAPIService],
})
export class DBAPIModule {}
