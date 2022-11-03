const walletInitalState = {
  user: {
    email: 'mateus@gmail.com',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '100',
        description: 'mc donalds',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2232',
            low: '5.1255',
            varBid: '0.0143',
            pctChange: '0.28',
            bid: '5.156',
            ask: '5.159',
            timestamp: '1667480882',
            create_date: '2022-11-03 10:08:02',
          },
        },
      },
      {
        id: 1,
        value: '58',
        description: 'fone de ouvido',
        currency: 'CAD',
        method: 'Dinheiro',
        tag: 'Lazer',
        exchangeRates: {
          USD: {
            code: 'USD',
            codein: 'BRL',
            name: 'Dólar Americano/Real Brasileiro',
            high: '5.2232',
            low: '5.1255',
            varBid: '0.0143',
            pctChange: '0.28',
            bid: '5.156',
            ask: '5.159',
            timestamp: '1667480882',
            create_date: '2022-11-03 10:08:02',
          },
        },
      },
    ],
    editor: false,
    idToEdit: 0,
    isFetching: false,
  },
};

export default walletInitalState;
