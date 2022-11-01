import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletLogo from '../logoTrybeWallet.png';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <img src={ WalletLogo } alt="wallet logo" />
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
        <span data-testid="email-field">{email}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
