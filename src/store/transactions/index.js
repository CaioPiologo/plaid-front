import TransactionTypes from './types';

const initialState = {
  transactionsData: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TransactionTypes.GET_TRANSACTIONS:
      return {
        ...state,
      };

    case TransactionTypes.GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactionsData: [...action.payload],
      };

    case TransactionTypes.GET_TRANSACTIONS_FAILURE:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
