import { Module } from '@nestjs/common';
import { RoleDataService } from './role-data.service';
import { RoleDataController } from './role-data.controller';
import { RoleData } from '@app/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleData]),
  ],
  controllers: [RoleDataController],
  providers: [RoleDataService],
})
export class RoleDataModule {}
