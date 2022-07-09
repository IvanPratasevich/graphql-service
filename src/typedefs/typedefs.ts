import { artistsTypeDefs } from '../modules/artists/artistsTypeDefs';
import { bandsTypeDefs } from '../modules/bands/bandsTypeDefs';
import { genresTypeDefs } from '../modules/genres/genresTypeDefs';
import { usersTypeDefs } from '../modules/users/usersTypeDefs';

export const typedefs = [usersTypeDefs, genresTypeDefs, bandsTypeDefs, artistsTypeDefs];
