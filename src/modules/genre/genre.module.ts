import { Module } from '@nestjs/common';
import { GenreService } from './services/genre.service';
import { GenreResolver } from './resolvers/genre.resolver';

@Module({
  imports: [],
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
})
export class GenreModule {}
