import { fetchAuthorized, putAuthorized, deleteAuthorized, postAuthorized } from './helpers';

export const getSummary = fetchAuthorized('/summary');
export const getUserInfo = fetchAuthorized('/userinfo');
export const logout = fetchAuthorized('/logout');
export const depositApi = putAuthorized('/deposit');
export const deleteDepositApi = deleteAuthorized('/deposit');
export const addFondApi = postAuthorized('/addfond');
