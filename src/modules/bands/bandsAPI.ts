import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from '../../constants/constants';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3003/v1/bands';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getBand(id) {
    return this.get(`/${encodeURIComponent(id)}`);
  }
  createBand(newGenreData) {
    return this.post('', newGenreData);
  }
  async getBands(offset = Pagination.offset, limit = Pagination.limit) {
    const bands = await this.get('', { offset, limit });
    return bands.items;
  }
  deleteBand(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }

  updateBand(id, updateBand) {
    return this.put(`/${encodeURIComponent(id)}`, updateBand);
  }
  getBandsByIds(bandsIds) {
    if (bandsIds && bandsIds.length) {
      return bandsIds.map((id) => this.getBand(id));
    }
    return [];
  }
}
