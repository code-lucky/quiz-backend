import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role } from '../../../../../../../work_lean/vue3-admin-backend/src/api/entitys/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleData } from '../../../../../../../work_lean/vue3-admin-backend/src/api/entitys/role-data.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, RoleData]),
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
