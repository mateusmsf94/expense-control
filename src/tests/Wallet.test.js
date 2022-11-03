import { screen } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('<Wallet/>', () => {
  test('se os elementos do formulario aparecem na tela', () => {
    renderWithRouterAndRedux(<Wallet />);
    const total = screen.getByTestId('total-field');
    expect(total).toBeInTheDocument();
    const currency = screen.getByTestId('total-field');
    expect(currency).toBeInTheDocument('header-currency-field');
    const email = screen.getByTestId('email-field');
    expect(email).toBeInTheDocument();
    const descricao = screen.getByLabelText(/Descrição da despesa/);
    expect(descricao).toBeInTheDocument();
    const categoria = screen.getByLabelText(/Categoria da despesa/);
    expect(categoria).toBeInTheDocument();
    const valor = screen.getByLabelText(/Valor/);
    expect(valor).toBeInTheDocument();
    const metodo = screen.getByLabelText(/Metodo de Pagamento/);
    expect(metodo).toBeInTheDocument();
    const moeda = screen.getByLabelText(/currency/);
    expect(moeda).toBeInTheDocument();
    const btnAdicionarDespesa = screen.getByRole('button', { name: /Adicionar Despesa/ });
    expect(btnAdicionarDespesa).toBeInTheDocument();
  });
});
