import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies, testAction } from '../redux/actions/walletActions';

const CATEGORIAS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const METODO_PAGAMENTO = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: CATEGORIAS[0],
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  fetchExchangeRate = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { dispatch } = this.props;
    this.setState({
      exchangeRates: await this.fetchExchangeRate(),
    }, () => {
      dispatch(testAction(this.state));
      this.setState((prevState) => ({
        id: prevState.id + 1,
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      }));
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Input
          datatestid="description-input"
          label="Descrição da despesa"
          type="text"
          onChange={ this.handleChange }
          name="description"
          value={ description }
        />
        <Select
          datatestid="tag-input"
          label="Categoria da despesa"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ tag }
          id="tag"
          name="tag"
          options={ CATEGORIAS }
        />
        <Input
          datatestid="value-input"
          label="Valor"
          type="number"
          onChange={ this.handleChange }
          name="value"
          value={ value }
        />
        <Select
          datatestid="method-input"
          label="Metodo de Pagamento"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ method }
          id="method"
          name="method"
          options={ METODO_PAGAMENTO }
        />
        <Select
          datatestid="currency-input"
          label="currency"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ currency }
          id="currency"
          name="currency"
          options={ currencies }
        />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar Despesa

        </button>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,

};

export default connect(mapStateToProps)(WalletForm);
