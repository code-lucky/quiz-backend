import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from '@app/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entities';

@Module({
  imports:[
    TypeOrmModule.forFeature([Menu, User])
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
