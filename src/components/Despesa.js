import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeById } from '../redux/actions/walletActions';

class Despesa extends React.Component {
  handleClickDelete = () => {
    const { dispatch, expense: { id } } = this.props;
    dispatch(removeById(id));
  };

  render() {
    const {
      expense: { description, method, tag, value, currency, exchangeRates },
    } = this.props;
    const { name, ask } = exchangeRates[currency];
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{parseFloat(value).toFixed(2)}</td>
        <td>{name}</td>
        <td>{parseFloat(ask).toFixed(2)}</td>
        <td>{parseFloat(value * ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.handleClickDelete }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

Despesa.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.shape([]),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Despesa);
