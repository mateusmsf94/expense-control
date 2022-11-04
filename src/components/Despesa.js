import React from 'react';
import PropTypes from 'prop-types';

class Despesa extends React.Component {
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
          <button type="button">Editar</button>
        </td>
        <td>
          <button type="button">Excluir</button>
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

};

export default Despesa;
