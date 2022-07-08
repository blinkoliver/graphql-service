import { Injectable } from '@nestjs/common';
import { User } from '../../../graphql.schema';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
const userMicroserviceURL = 'http://localhost:3004/v1/users';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ): Observable<AxiosResponse> {
    return this.httpService
      .post(`${userMicroserviceURL}/register`, {
        firstName,
        lastName,
        email,
        password,
      })
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }

  getUser(id: string): Observable<AxiosResponse<User>> {
    return this.httpService.get(`${userMicroserviceURL}/${id}`).pipe(
      map((res) => {
        return res.data;
      }),
    );
  }

  login(email: string, password: string): Observable<AxiosResponse> {
    return this.httpService
      .post(`${userMicroserviceURL}/login`, { email, password })
      .pipe(
        map((res) => {
          return res.data;
        }),
      );
  }
}
