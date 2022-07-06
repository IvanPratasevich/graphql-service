import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getUser(id) {
    const user = await this.get(`/${encodeURIComponent(id)}`);
    user.id = user._id;
    return user;
  }
  async registerUser(userData) {
    const newUser = await this.post(`/register`, userData.registerUserInput);
    newUser.id = newUser._id;
    return newUser;
  }
  async loginUser(userData) {
    return await this.post(`/login`, userData);
  }
}
