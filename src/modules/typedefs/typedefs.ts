import { albumsTypeDefs } from '../albums/albumsTypeDefs';
import { artistsTypeDefs } from '../artists/artistsTypeDefs';
import { bandsTypeDefs } from '../bands/bandsTypeDefs';
import { favouritesTypeDefs } from '../favourites/favouritesTypeDefs';
import { genresTypeDefs } from '../genres/genresTypeDefs';
import { tracksTypeDefs } from '../tracks/tracksTypeDefs';
import { usersTypeDefs } from '../users/usersTypeDefs';

export const typedefs = [
  usersTypeDefs,
  genresTypeDefs,
  bandsTypeDefs,
  artistsTypeDefs,
  albumsTypeDefs,
  tracksTypeDefs,
  favouritesTypeDefs,
];
