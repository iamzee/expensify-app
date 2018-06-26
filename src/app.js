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

import './firebase/firebase';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('app')
);
