import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../../../../../../work_lean/vue3-admin-backend/src/api/entitys/article.entity';

@Module({
  imports: [
    // Import the TypeOrmModule to use the Article entity
    TypeOrmModule.forFeature([Article]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
