import { Injectable } from '@nestjs/common';
import { Band, CreateBand, UpdateBand } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
const bandsMicroserviceUrl = 'http://localhost:3003/v1/bands';

@Injectable()
export class BandService {
  constructor(private readonly httpService: HttpService) {}

  create(
    createBand: CreateBand,
    token: string,
  ): Observable<AxiosResponse<Band>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .post(bandsMicroserviceUrl, createBand, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  findAll(limit: number, offset: number): Observable<AxiosResponse<Band[]>> {
    const config: AxiosRequestConfig = {
      params: { limit, offset },
    };
    return this.httpService.get(bandsMicroserviceUrl, config).pipe(
      map((res) => {
        return res.data.items;
      }),
    );
  }

  findOne(id: string): Observable<AxiosResponse<Band>> {
    return this.httpService.get(`${bandsMicroserviceUrl}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }
  update(
    id: string,
    updateBand: UpdateBand,
    token: string,
  ): Observable<AxiosResponse<Band>> {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    };
    return this.httpService
      .put(`${bandsMicroserviceUrl}/${id}`, updateBand, requestConfig)
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
      .delete(`${bandsMicroserviceUrl}/${id}`, requestConfig)
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
