import { Module } from '@nestjs/common';
import { TrackService } from './services/track.service';
import { TrackResolver } from './resolvers/track.resolver';

@Module({
  imports: [],
  providers: [TrackService, TrackResolver],
  exports: [TrackService],
})
export class TrackModule {}
