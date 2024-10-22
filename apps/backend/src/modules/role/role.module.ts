import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role, RoleData } from '@app/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Role, RoleData]),
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
