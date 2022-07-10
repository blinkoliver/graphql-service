import { Injectable } from '@nestjs/common';
import { Track, CreateTrack, UpdateTrack } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const trackMicroserviceURL = 'http://localhost:3006/v1/tracks';
@Injectable()
export class TrackService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createTrack: CreateTrack,
    token: string,
  ): Observable<AxiosResponse<Track[]>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .post(trackMicroserviceURL, createTrack, requestConfig)
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
    token: string,
  ): Observable<AxiosResponse<Track>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .put(`${trackMicroserviceURL}/${id}`, updateTrack, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  delete(id: string, token: any) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .delete(`${trackMicroserviceURL}/${id}`, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
