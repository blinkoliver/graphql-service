import { Injectable } from '@nestjs/common';
import { Album, CreateAlbum, UpdateAlbum } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const albumMicroserviceUrl = 'http://localhost:3005/v1/albums';

@Injectable()
export class AlbumService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createAlbum: CreateAlbum,
    token: string,
  ): Observable<AxiosResponse<Album>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .post(albumMicroserviceUrl, createAlbum, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  findAll(limit: number, offset: number): Observable<AxiosResponse<Album[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get(albumMicroserviceUrl, config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }

  findOne(id: string): Observable<AxiosResponse<Album>> {
    return this.httpService.get(`${albumMicroserviceUrl}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
  update(
    id: string,
    updateAlbum: UpdateAlbum,
    token: string,
  ): Observable<AxiosResponse<Album>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .put(`${albumMicroserviceUrl}/${id}`, updateAlbum, requestConfig)
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
      .delete(`${albumMicroserviceUrl}/${id}`, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
