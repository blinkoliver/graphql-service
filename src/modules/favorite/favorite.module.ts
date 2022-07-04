import { Module } from '@nestjs/common';
import { FavoriteService } from './services/favorite.service';
import { FavoriteResolver } from './resolvers/favorite.resolver';

@Module({
  imports: [],
  providers: [FavoriteService, FavoriteResolver],
  exports: [FavoriteService],
})
export class FavoriteModule {}
