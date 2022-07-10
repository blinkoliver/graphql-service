import { Injectable } from '@nestjs/common';
import { Genre, CreateGenre, UpdateGenre } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const genreMicroserviceUrl = 'http://localhost:3001/v1/genres';

@Injectable()
export class GenreService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createGenre: CreateGenre,
    token: string,
  ): Observable<AxiosResponse<Genre>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .post(genreMicroserviceUrl, createGenre, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  findAll(limit: number, offset: number): Observable<AxiosResponse<Genre[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get(genreMicroserviceUrl, config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }

  findOne(id: string): Observable<AxiosResponse<Genre>> {
    return this.httpService.get(`${genreMicroserviceUrl}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
  update(
    id: string,
    updateGenre: UpdateGenre,
    token: string,
  ): Observable<AxiosResponse<Genre>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .put(`${genreMicroserviceUrl}/${id}`, updateGenre, requestConfig)
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
      .delete(`${genreMicroserviceUrl}/${id}`, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
