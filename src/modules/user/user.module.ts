import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
