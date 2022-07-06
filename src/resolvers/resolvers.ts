import { genresResolver } from '../modules/genres/genresResolver';
import { userResolver } from '../modules/users/usersResolver';

export const resolvers = [userResolver, genresResolver];
