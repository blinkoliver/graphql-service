import { Injectable } from '@nestjs/common';
import { Track, CreateTrack, UpdateTrack } from '../../../graphql.schema';
import { Config } from '../../../types';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const trackMicroserviceURL = 'http://localhost:3006/v1/tracks';
@Injectable()
export class TrackService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createTrack: CreateTrack,
    config: Config['config'],
  ): Observable<AxiosResponse<Track[]>> {
    console.log(createTrack, config);

    return this.httpService
      .post(trackMicroserviceURL, createTrack, config)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  findAll(limit: number, offset: number): Observable<AxiosResponse<Track[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get(trackMicroserviceURL, config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }

  findOne(id: string): Observable<AxiosResponse<Track>> {
    return this.httpService.get(`${trackMicroserviceURL}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
  update(
    id: string,
    updateTrack: UpdateTrack,
    config: Config['config'],
  ): Observable<AxiosResponse<Track>> {
    const updatedConfig: AxiosRequestConfig = {
      params: { id, config },
    };
    return this.httpService
      .put(trackMicroserviceURL, updateTrack, updatedConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  delete(id: string, config: Config['config']) {
    const updatedConfig: AxiosRequestConfig = {
      params: { id, config },
    };
    return this.httpService.delete(trackMicroserviceURL, updatedConfig).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
}
