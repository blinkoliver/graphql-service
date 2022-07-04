import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TrackService } from '../services/track.service';
import { GenreService } from 'src/modules/genre/services/genre.service';
import { ArtistService } from 'src/modules/artist/services/artist.service';
import { BandService } from 'src/modules/band/services/band.service';

@Resolver('Track')
export class TrackResolver {
  constructor(
    private readonly trackService: TrackService,
    private readonly genreService: GenreService,
    private readonly artistService: ArtistService,
    private readonly bandService: BandService,
  ) {}

  //     @Query{}
  //     async track(@Args('id') id:String) {
  //     return this.trackService.findOne(id)
  // }
  //      @Query{}
  //     async tracks() {
  //     return this.trackService.findAll()
  // }
  //
  // @Resolver()
  // @ResolveField()
}
