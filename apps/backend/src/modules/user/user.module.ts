import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entities';
import { EmailModule } from '@app/email';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    EmailModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
