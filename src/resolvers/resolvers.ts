import { albumsResolver } from '../modules/albums/albumsResolver';
import { artistsResolver } from '../modules/artists/artistsResolver';
import { bandsResolver } from '../modules/bands/bandsResolver';
import { favouritesResolver } from '../modules/favourites/favouritesResolver';
import { genresResolver } from '../modules/genres/genresResolver';
import { tracksResolver } from '../modules/tracks/tracksResolver';
import { userResolver } from '../modules/users/usersResolver';

export const resolvers = [
  userResolver,
  genresResolver,
  bandsResolver,
  artistsResolver,
  albumsResolver,
  tracksResolver,
  favouritesResolver,
];
