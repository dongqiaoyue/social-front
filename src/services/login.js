import {get} from '../utils/request';

export const loginService = (username, password) =>
  get(`/api/login/${username}/${password}`);

export const getUser = (id) => get(`/api/users/${id}`);
