import { Module } from '@nestjs/common';
import { GenreService } from './services/genre.service';
import { GenreResolver } from './resolvers/genre.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GenreService, GenreResolver],
  exports: [GenreService],
})
export class GenreModule {}
