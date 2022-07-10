import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GenreService } from '../../genre/services/genre.service';
import { CreateGenre, UpdateGenre } from '../../../graphql.schema';
import { Token } from 'src/decorators/token.decorators';

@Resolver('Genre')
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}
  @Mutation('createGenre')
  create(
    @Args('createGenre') createGenre: CreateGenre,
    @Token() token: string,
  ) {
    return this.genreService.create(createGenre, token);
  }

  @Query('genres')
  async genres(
    @Args('limit', { defaultValue: 2 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.genreService.findAll(limit, offset);
  }

  @Query('genre')
  async genre(@Args('id') id: string) {
    return this.genreService.findOne(id);
  }

  @Mutation('updateGenre')
  update(
    @Args('id') id: string,
    @Args('updateGenre') updateGenre: UpdateGenre,
    @Token() token: string,
  ) {
    return this.genreService.update(id, updateGenre, token);
  }

  @Mutation('deleteGenre')
  remove(@Args('id') id: string, @Token() token: string) {
    return this.genreService.delete(id, token);
  }
}
