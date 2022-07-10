import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3007/v1/favourites';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  addItem(typeInput, idInput) {
    return this.put(`/add`, { type: `${typeInput}`, id: `${idInput}` });
  }

  getFavourites() {
    return this.get('');
  }
}
