import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Context,
  Resolver,
} from '@nestjs/graphql';
import { TrackService } from '../services/track.service';
import { GenreService } from '../../genre/services/genre.service';
import { ArtistService } from '../../artist/services/artist.service';
import { BandService } from '../../band/services/band.service';
import { Track, CreateTrack, UpdateTrack } from '../../../graphql.schema';
import { Token } from 'src/decorators/token.decorators';

@Resolver('Track')
export class TrackResolver {
  constructor(private readonly trackService: TrackService) {}
  // private readonly genreService: GenreService,
  // private readonly artistService: ArtistService,
  // private readonly bandService: BandService,

  @Mutation('createTrack')
  create(
    @Args('createTrack') createTrack: CreateTrack,
    @Token() token: string,
  ) {
    return this.trackService.create(createTrack, token);
  }

  @Query('tracks')
  async tracks(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.trackService.findAll(limit, offset);
  }

  @Query('track')
  async track(@Args('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Mutation('updateTrack')
  update(
    @Args('id') id: string,
    @Args('updateTrack') updateTrack: UpdateTrack,
    @Token() token: string,
  ) {
    return this.trackService.update(id, updateTrack, token);
  }

  @Mutation('deleteTrack')
  remove(@Args('id') id: string, @Token() token: string) {
    return this.trackService.delete(id, token);
  }

  // @Resolver()
  // @ResolveField()
  // async bands(@Parent() track) {
  //   const { bandsIds } = track;
  //   return await Promise.all(
  //     bandsIds.map((id) => {
  //       // return this.bandService.findOne(id);
  //     }),
  //   );
  // }
  // @Resolver()
  // @ResolveField()
  // async artists(@Parent() track) {
  //   const { artistsIds } = track;
  //   return await Promise.all(
  //     artistsIds.map((id) => {
  //       // return this.artistService.findOne(id);
  //     }),
  //   );
  // }
  // @Resolver()
  // @ResolveField()
  // async genres(@Parent() track) {
  //   const { genresIds } = track;
  //   return await Promise.all(
  //     genresIds.map((id) => {
  //       // return this.genreService.findOne(id);
  //     }),
  //   );
  // }
}
