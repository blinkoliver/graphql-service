import { Module } from '@nestjs/common';
import { BandService } from './services/band.service';
import { BandResolver } from './resolvers/band.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [BandService, BandResolver],
  exports: [BandService],
})
export class BandModule {}
