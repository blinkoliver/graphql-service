import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TrackService } from '../services/track.service';
import { GenreService } from '../../genre/services/genre.service';
import { ArtistService } from '../../artist/services/artist.service';
import { BandService } from '../../band/services/band.service';

@Resolver('Track')
export class TrackResolver {
  constructor(private readonly trackService: TrackService) {}
  // private readonly genreService: GenreService,
  // private readonly artistService: ArtistService,
  // private readonly bandService: BandService,

  @Query('tracks')
  async tracks(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.trackService.findAll(limit, offset);
  }
  // @Query()
  // async track(@Args('id') id: string) {
  //   console.log(id);
  //   return this.trackService.findOne(id);
  // }
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
