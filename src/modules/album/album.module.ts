import { Module } from '@nestjs/common';
import { AlbumService } from './services/album.service';
import { AlbumResolver } from './resolvers/album.resolver';

@Module({
  imports: [],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}
