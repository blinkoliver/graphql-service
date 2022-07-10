import { Module } from '@nestjs/common';
import { TrackService } from './services/track.service';
import { TrackResolver } from './resolvers/track.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TrackService, TrackResolver],
  exports: [TrackService],
})
export class TrackModule {}
