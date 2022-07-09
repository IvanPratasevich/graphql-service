import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Pagination } from '../../constants/constants';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3006/v1/tracks';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getTrack(id) {
    console.log(id);
    const track = await this.get(`/${encodeURIComponent(id)}`);
    return track;
  }
  createTrack(newTrackData) {
    return this.post('', newTrackData);
  }
  async getTracks(offset = Pagination.offset, limit = Pagination.limit) {
    const tracks = await this.get('', { offset, limit });
    return tracks.items;
  }
  deleteTrack(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }

  updateTrack(id, updateTrack) {
    return this.put(`/${encodeURIComponent(id)}`, updateTrack);
  }

  async getTracksByIds(tracksIds) {
    return tracksIds.map((id) => this.getTrack(id));
  }
}
