import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from '../../../../../../../work_lean/vue3-admin-backend/src/api/entitys/menu.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../../../../../work_lean/vue3-admin-backend/src/api/entitys/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Menu, User])
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
