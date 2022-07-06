import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistModule } from './modules/artist/artist.module';
import { UserModule } from './modules/user/user.module';
import { BandModule } from './modules/band/band.module';
import { GenreModule } from './modules/genre/genre.module';
import { TrackModule } from './modules/track/track.module';
import { AlbumModule } from './modules/album/album.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { ArtistResolver } from './modules/artist/resolvers/artist.resolver';
import { UserResolver } from './modules/user/resolvers/user.resolver';
import { BandResolver } from './modules/band/resolvers/band.resolver';
import { GenreResolver } from './modules/genre/resolvers/genre.resolver';
import { TrackResolver } from './modules/track/resolvers/track.resolver';
import { AlbumResolver } from './modules/album/resolvers/album.resolver';
import { FavoriteResolver } from './modules/favorite/resolvers/favorite.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    ArtistModule,
    UserModule,
    BandModule,
    GenreModule,
    TrackModule,
    AlbumModule,
    FavoriteModule,
  ],
  // controllers: [AppController],
  // providers: [
  //   AppService,
  //   ArtistResolver,
  //   UserResolver,
  //   BandResolver,
  //   GenreResolver,
  //   TrackResolver,
  //   AlbumResolver,
  //   FavoriteResolver,
  // ],
})
export class AppModule {}
