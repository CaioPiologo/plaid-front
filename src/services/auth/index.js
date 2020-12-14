import api from '../api';

const basePath = 'api';

const AuthServices = {
  getLinkToken: () => api.post(`${basePath}/create_link_token`),
  setAccessToken: (body) => api.post(`${basePath}/set_access_token`, body),
};

export default AuthServices;
