import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { fetchCurrencies } from '../redux/actions/walletActions';

const CATEGORIAS = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const METODO_PAGAMENTO = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

class WalletForm extends React.Component {
  constructor() {
    super();
    this.state = {
      valorDaDespesa: '',
      descricao: '',
      moeda: '',
      metodoDePagamento: '',
      categoria: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  // fetchCurrencies = async () => {
  //   const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  //   const data = await response.json();
  //   const currArray = Object.keys(data);
  //   const result = currArray.filter((curr) => curr !== 'USDT');
  //   return result;
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { valorDaDespesa, descricao, moeda, metodoDePagamento, categoria } = this.state;
    const { currencies } = this.props;
    return (
      <div>
        <Input
          datatestid="description-input"
          label="Descrição da despesa"
          type="text"
          onChange={ this.handleChange }
          name="descricao"
          value={ descricao }
        />
        <Select
          datatestid="tag-input"
          label="Categoria da despesa"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ categoria }
          id="categoria"
          name="categoria"
          options={ CATEGORIAS }
        />
        <Input
          datatestid="value-input"
          label="Valor"
          type="number"
          onChange={ this.handleChange }
          name="valorDaDespesa"
          value={ valorDaDespesa }
        />
        <Select
          datatestid="method-input"
          label="Metodo de Pagamento"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ metodoDePagamento }
          id="metodoDePagamento"
          name="metodoDePagamento"
          options={ METODO_PAGAMENTO }
        />
        <Select
          datatestid="currency-input"
          label="Moeda"
          defaultOption="Selecione"
          defaultValue="Selecione"
          onChange={ this.handleChange }
          value={ moeda }
          id="moeda"
          name="moeda"
          options={ currencies }
        />

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
