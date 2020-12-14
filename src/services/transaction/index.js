import api from '../api';

const basePath = 'api';

const TransactionServices = {
  getTransactions: () => api.get(`${basePath}/transactions`),
};

export default TransactionServices;
