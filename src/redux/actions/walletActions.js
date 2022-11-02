export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const REQUEST_CURRENCY_SUCESS = 'REQUEST_CURRENCY_SUCESS';
export const REQUEST_CURRENCY_ERRO = 'REQUEST_CURRENCY_ERROR';

export const requestCurr = () => ({
  type: REQUEST_CURRENCY,
});

export const responseCurrSucess = (curr) => ({
  type: REQUEST_CURRENCY_SUCESS,
  payload: curr,
});

// export const fetchCurrencies = async () => {
//   dispatch(requestCurr());
//   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//   const data = await response.json();
//   const currArray = Object.keys(data);
//   const result = currArray.filter((curr) => curr !== 'USDT');
//   return result;
// };

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurr());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((json) => {
        const currArray = Object.keys(json);
        const result = currArray.filter((curr) => curr !== 'USDT');
        return result;
      })
      .then((result) => dispatch(responseCurrSucess(result)));
  };
}
