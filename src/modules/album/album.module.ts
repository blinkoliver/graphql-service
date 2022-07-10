import { Module } from '@nestjs/common';
import { AlbumService } from './services/album.service';
import { AlbumResolver } from './resolvers/album.resolver';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  providers: [AlbumService, AlbumResolver],
  exports: [AlbumService],
})
export class AlbumModule {}
