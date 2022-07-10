import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BandService } from '../../bands/services/band.service';
import { CreateGenre, UpdateGenre } from '../../../graphql.schema';
import { Token } from 'src/decorators/token.decorators';

@Resolver('Band')
export class BandResolver {
  constructor(private readonly bandService: BandService) {}
  @Mutation('createBand')
  create(@Args('createBand') createBand: CreateGenre, @Token() token: string) {
    return this.bandService.create(createBand, token);
  }

  @Query('bands')
  async bands(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.bandService.findAll(limit, offset);
  }

  @Query('band')
  async band(@Args('id') id: string) {
    return this.bandService.findOne(id);
  }

  @Mutation('updateBand')
  update(
    @Args('id') id: string,
    @Args('updateBand') updateBand: UpdateGenre,
    @Token() token: string,
  ) {
    return this.bandService.update(id, updateBand, token);
  }

  @Mutation('deleteBand')
  remove(@Args('id') id: string, @Token() token: string) {
    return this.bandService.delete(id, token);
  }
}
