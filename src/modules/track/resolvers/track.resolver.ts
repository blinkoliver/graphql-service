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
import { Config } from '../../../types';

@Resolver('Track')
export class TrackResolver {
  constructor(private readonly trackService: TrackService) {}
  // private readonly genreService: GenreService,
  // private readonly artistService: ArtistService,
  // private readonly bandService: BandService,

  @Mutation('createTrack')
  create(
    @Args('createTrack') createTrack: CreateTrack,
    @Context() ctx: Config,
  ) {
    console.log(ctx);
    return this.trackService.create(createTrack, ctx.config);
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
    @Context() ctx: Config,
  ) {
    return this.trackService.update(id, updateTrack, ctx.config);
  }

  @Mutation('deleteTrack')
  remove(@Args('id') id: string, @Context() ctx: Config) {
    return this.trackService.delete(id, ctx.config);
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
