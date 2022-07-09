import { artistsResolver } from '../modules/artists/artistsResolver';
import { bandsResolver } from '../modules/bands/bandsResolver';
import { genresResolver } from '../modules/genres/genresResolver';
import { userResolver } from '../modules/users/usersResolver';

export const resolvers = [userResolver, genresResolver, bandsResolver, artistsResolver];
