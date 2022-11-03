import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const tagTestEmail = 'email-input';
const tagTestPassword = 'password-input';

describe('<Login>', () => {
  test('se Login eh renderizado no path correto', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('se exite campos de login, senha e botao', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId(tagTestEmail);
    const senha = screen.getByTestId(tagTestPassword);
    const loginBtn = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(senha).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  test('se o botao fica habilitado com os dados validos', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId(tagTestEmail);
    const senha = screen.getByTestId(tagTestPassword);
    const loginBtn = screen.getByRole('button');

    userEvent.type(email, 'mateus@gmail.com');
    userEvent.type(senha, '0987453');
    expect(loginBtn).toBeEnabled();
  });

  test('se ao logar o usario eh redirecionado para pagina "/carteira"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId(tagTestEmail);
    const senha = screen.getByTestId(tagTestPassword);
    const loginBtn = screen.getByRole('button');

    userEvent.type(email, 'mateus@gmail.com');
    userEvent.type(senha, '0987453');
    userEvent.click(loginBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
});
