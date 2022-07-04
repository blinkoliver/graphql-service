import { Module } from '@nestjs/common';
import { ArtistService } from './services/artist.service';
import { ArtistResolver } from './resolvers/artist.resolver';

@Module({
  imports: [],
  providers: [ArtistService, ArtistResolver],
  exports: [ArtistService],
})
export class ArtistModule {}
