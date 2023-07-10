import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { dbuserModule } from 'src/database/dbuser.Module';

@Module({
  imports: [dbuserModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule, UserService]
})
export class UserModule { }
