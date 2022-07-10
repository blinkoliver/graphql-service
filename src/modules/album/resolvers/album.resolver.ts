import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AlbumService } from '../../album/services/album.service';
import { CreateAlbum, UpdateAlbum } from '../../../graphql.schema';
import { Token } from 'src/decorators/token.decorators';

@Resolver('Album')
export class AlbumResolver {
  constructor(private readonly albumService: AlbumService) {}
  @Mutation('createAlbum')
  create(
    @Args('createAlbum') createAlbum: CreateAlbum,
    @Token() token: string,
  ) {
    return this.albumService.create(createAlbum, token);
  }

  @Query('albums')
  async albums(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.albumService.findAll(limit, offset);
  }

  @Query('album')
  async album(@Args('id') id: string) {
    return this.albumService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(
    @Args('id') id: string,
    @Args('updateAlbum') updateAlbum: UpdateAlbum,
    @Token() token: string,
  ) {
    return this.albumService.update(id, updateAlbum, token);
  }

  @Mutation('deleteAlbum')
  remove(@Args('id') id: string, @Token() token: string) {
    return this.albumService.delete(id, token);
  }
}
