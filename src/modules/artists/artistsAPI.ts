import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from '../../constants/constants';

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3002/v1/artists';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getArtist(id) {
    const artist = await this.get(`/${encodeURIComponent(id)}`);
    return artist;
  }
  createArtist(newArtistData) {
    return this.post('', newArtistData);
  }
  async getArtists(offset = Pagination.offset, limit = Pagination.limit) {
    const artists = await this.get('', { offset, limit });
    return artists.items;
  }
  deleteArtist(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }

  updateArtist(id, updateArtist) {
    return this.put(`/${encodeURIComponent(id)}`, updateArtist);
  }
  getArtistsByIds(genresIds) {
    return genresIds.map((id) => this.getArtist(id));
  }
}
