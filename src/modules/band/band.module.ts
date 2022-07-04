import { Module } from '@nestjs/common';
import { BandService } from './services/band.service';
import { BandResolver } from './resolvers/band.resolver';

@Module({
  imports: [],
  providers: [BandService, BandResolver],
  exports: [BandService],
})
export class BandModule {}
