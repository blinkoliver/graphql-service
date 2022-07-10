import { Module } from '@nestjs/common';
import { ArtistService } from './services/artist.service';
import { ArtistResolver } from './resolvers/artist.resolver';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  providers: [ArtistService, ArtistResolver],
  exports: [ArtistService],
})
export class ArtistModule {}
