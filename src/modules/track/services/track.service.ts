import { Injectable } from '@nestjs/common';
import { Track } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
@Injectable()
export class TrackService {
  constructor(private readonly httpService: HttpService) {}

  findAll(limit: number, offset: number): Observable<AxiosResponse<Track[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get('http://localhost:3006/v1/tracks', config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }
  //   create(track: Track): Track {
  //     track.id = (this.tracks.length + 1).toString();
  //     this.tracks.push(track);
  //     return track;
  //   }
  //   findAll(limit: number, offset: number): Track[] {
  //     return this.tracks;
  //   }

  //   findOneById(id: string): Track {
  //     return this.tracks.find((track) => track.id === id);
  //   }
}
