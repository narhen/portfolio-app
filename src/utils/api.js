import { fetchAuthorized, putAuthorized, deleteAuthorized } from './helpers';

export const getSummary = fetchAuthorized('/summary');
export const getUserInfo = fetchAuthorized('/userinfo');
export const logout = fetchAuthorized('/logout');
export const depositApi = putAuthorized('/deposit');
export const deleteDepositApi = deleteAuthorized('/deposit');
