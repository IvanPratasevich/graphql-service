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

  async getAlbum(id) {
    const album = await this.get(`/${encodeURIComponent(id)}`);
    return album;
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
