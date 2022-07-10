import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from '../../constants/constants';

export class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/v1/genres';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getGenre(id) {
    const genre = await this.get(`/${encodeURIComponent(id)}`);
    return genre;
  }
  createGenre(newGenreData) {
    return this.post('', newGenreData);
  }
  async getGenres(offset = Pagination.offset, limit = Pagination.limit) {
    const genres = await this.get('', { offset, limit });
    return genres.items;
  }
  deleteGenre(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }

  updateGenre(id, updateGenre) {
    return this.put(`/${encodeURIComponent(id)}`, updateGenre);
  }

  getGenresByIds(genresIds) {
    if (genresIds && genresIds.length) {
      return genresIds.map((id) => this.getGenre(id));
    }
    return [];
  }
}
