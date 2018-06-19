import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
store.subscribe(() => {
  const visibleExpenses = getVisibleExpenses(
    store.getState().expenses,
    store.getState().filters
  );
  console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water bill', amount: 300 }));
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 500, createdAt: 1000 })
);
store.dispatch(addExpense({ description: 'Rent', amount: 1500 }));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
