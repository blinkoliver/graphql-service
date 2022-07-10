import { Injectable } from '@nestjs/common';
import { Artist, CreateArtist, UpdateArtist } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const artistMicroserviceUrl = 'http://localhost:3002/v1/artists';

@Injectable()
export class ArtistService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createArtist: CreateArtist,
    token: string,
  ): Observable<AxiosResponse<Artist>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .post(artistMicroserviceUrl, createArtist, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  findAll(limit: number, offset: number): Observable<AxiosResponse<Artist[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get(artistMicroserviceUrl, config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }

  findOne(id: string): Observable<AxiosResponse<Artist>> {
    return this.httpService.get(`${artistMicroserviceUrl}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
  update(
    id: string,
    updateArtist: UpdateArtist,
    token: string,
  ): Observable<AxiosResponse<Artist>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .put(`${artistMicroserviceUrl}/${id}`, updateArtist, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  delete(id: string, token: string) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .delete(`${artistMicroserviceUrl}/${id}`, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
