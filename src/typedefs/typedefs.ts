import { albumsTypeDefs } from '../modules/albums/albumsTypeDefs';
import { artistsTypeDefs } from '../modules/artists/artistsTypeDefs';
import { bandsTypeDefs } from '../modules/bands/bandsTypeDefs';
import { favouritesTypeDefs } from '../modules/favourites/favouritesTypeDefs';
import { genresTypeDefs } from '../modules/genres/genresTypeDefs';
import { tracksTypeDefs } from '../modules/tracks/tracksTypeDefs';
import { usersTypeDefs } from '../modules/users/usersTypeDefs';

export const typedefs = [
  usersTypeDefs,
  genresTypeDefs,
  bandsTypeDefs,
  artistsTypeDefs,
  albumsTypeDefs,
  tracksTypeDefs,
  favouritesTypeDefs,
];
