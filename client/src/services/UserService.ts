import { AxiosResponse } from 'axios';
import $api from '../http';
import { User } from '../models/User';

// eslint-disable-next-line require-jsdoc
export default class UserService {
  // eslint-disable-next-line require-jsdoc
  static fetchUsers(): Promise<AxiosResponse<User[]>> {
    return $api.get<User[]>('/users');
  }
}
