import { fetchAuthorized, putAuthorized } from './helpers';

export const getSummary = fetchAuthorized('/summary');
export const getUserInfo = fetchAuthorized('/userinfo');
export const logout = fetchAuthorized('/logout');
export const deposit = putAuthorized('/deposit');
