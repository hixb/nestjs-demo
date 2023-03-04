import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 200,
      data: [],
      message: '',
    };
  }

  addUser() {
    return {
      code: 200,
      data: {},
      message: 'success',
    };
  }
}
