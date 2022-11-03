import {
  ADD_EXPENSES,
  REQUEST_CURRENCY,
  REQUEST_CURRENCY_SUCESS,
} from '../actions/walletActions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  loading: false,
  total: 0,
  test: '',
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCY: {
    return {
      ...state,
      loading: true,
    };
  }
  case REQUEST_CURRENCY_SUCESS: {
    return {
      ...state,
      currencies: action.payload,
      loading: false,
    };
  }
  case ADD_EXPENSES: {
    return {
      ...state,
      expenses: action.payload,
    };
  }
  case 'TEST': {
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  }
  default:
    return state;
  }
}

export default wallet;
