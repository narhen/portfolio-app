import { fetchAuthorized } from '../utils/helpers';

export const getSummary = fetchAuthorized('/summary');
