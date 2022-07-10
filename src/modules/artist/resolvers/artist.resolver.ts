import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ArtistService } from '../../artist/services/artist.service';
import { CreateArtist, UpdateArtist } from '../../../graphql.schema';
import { Token } from 'src/decorators/token.decorators';

@Resolver('Artist')
export class ArtistResolver {
  constructor(private readonly artistService: ArtistService) {}
  @Mutation('createArtist')
  create(
    @Args('createArtist') createTrack: CreateArtist,
    @Token() token: string,
  ) {
    return this.artistService.create(createTrack, token);
  }

  @Query('artists')
  async tracks(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.artistService.findAll(limit, offset);
  }

  @Query('artist')
  async track(@Args('id') id: string) {
    return this.artistService.findOne(id);
  }

  @Mutation('updateArtist')
  update(
    @Args('id') id: string,
    @Args('updateArtist') updateTrack: UpdateArtist,
    @Token() token: string,
  ) {
    return this.artistService.update(id, updateTrack, token);
  }

  @Mutation('deleteArtist')
  remove(@Args('id') id: string, @Token() token: string) {
    return this.artistService.delete(id, token);
  }
}
