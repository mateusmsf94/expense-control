import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletLogo from '../logoTrybeWallet.png';

class Header extends Component {
  totalExpenses = () => {
    const { expenses } = this.props;
    const sum = expenses.reduce((acc, curr) => {
      acc += curr.value * curr.exchangeRates[curr.currency].ask;
      return acc;
    }, 0);
    return parseFloat(sum).toFixed(2);
  };

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <img src={ WalletLogo } alt="wallet logo" />
        <span data-testid="total-field">
          {expenses.length === 0 ? 0 : this.totalExpenses()}
        </span>
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="email-field">{email}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf({}).isRequired,
};

export default connect(mapStateToProps)(Header);
