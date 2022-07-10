import { albumsResolver } from '../albums/albumsResolver';
import { artistsResolver } from '../artists/artistsResolver';
import { bandsResolver } from '../bands/bandsResolver';
import { favouritesResolver } from '../favourites/favouritesResolver';
import { genresResolver } from '../genres/genresResolver';
import { tracksResolver } from '../tracks/tracksResolver';
import { userResolver } from '../users/usersResolver';

export const resolvers = [
  userResolver,
  genresResolver,
  bandsResolver,
  artistsResolver,
  albumsResolver,
  tracksResolver,
  favouritesResolver,
];
