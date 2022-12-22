import React from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import fetchRockets from '../redux/rockets/rocketThunk';

import Rockets from '../components/rockets/Rockets';
import Layout from '../components/layout/Layout';

describe('display the rockets in the page', () => {
  it('should display all the rockets', () => {
    const { container } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('should show the navigation', () => {
  it('full app rendering/navigating', async () => {
    render(<Layout />, { wrapper: BrowserRouter });
    expect(screen.queryByText(/Rockets/)).toMatchSnapshot();
  });
});

describe('Rocket reducers', () => {
  jest.setTimeout(30000);
  it('should fetch rockets', async () => {
    await store.dispatch(fetchRockets());
    expect(store.getState().rockets.length).toEqual(4);
  });
});
