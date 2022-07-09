import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from '../../constants/constants';

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3005/v1/albums';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getAlbum(id) {
    return this.get(`/${encodeURIComponent(id)}`);
  }
  createAlbum(newAlbumData) {
    return this.post('', newAlbumData);
  }
  async getAlbums(offset = Pagination.offset, limit = Pagination.limit) {
    const albums = await this.get('', { offset, limit });
    return albums.items;
  }
  deleteAlbum(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }

  updateAlbum(id, updateBand) {
    return this.put(`/${encodeURIComponent(id)}`, updateBand);
  }
}
