import React from 'react';
import { connect } from 'react-redux';
import WalletLogo from '../logoTrybeWallet.png';
import { addEmail, login as loginAction } from '../redux/actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };
  }

  checkEmail = () => {
    const { email } = this.state;
    const regex = /[a-z0-9]+@[a-z0-9]+\.com/;
    return regex.test(email);
  };

  checkPassword = () => {
    const { password } = this.state;
    const minLength = 5;
    return password.length > minLength;
  };

  isValid = () => {
    if (this.checkEmail() && this.checkPassword()) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      this.isValid,
    );
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(addEmail(email));
    history.push('/carteira');
  };

  render() {
    const { isDisable } = this.state;
    return (
      <div>
        <img src={ WalletLogo } alt="wallet logo" />
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleInputChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleInputChange }
        />
        <button type="button" disabled={ isDisable } onClick={ this.handleClick }>
          Entrar
        </button>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   login: (e) => dispatch(loginAction(e)),
// });

export default connect()(Login);
