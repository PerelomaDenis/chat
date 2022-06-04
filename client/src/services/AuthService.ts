import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import $api from '../http';

// eslint-disable-next-line require-jsdoc
export default class AuthService {
  // eslint-disable-next-line require-jsdoc
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-in', { email, password });
  }

  // eslint-disable-next-line require-jsdoc
  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/sign-up', { email, password });
  }

  // eslint-disable-next-line require-jsdoc
  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
