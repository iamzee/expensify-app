import React from 'react';
import { connect } from 'react-redux';

import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/');
        }}
        expense={props.expense}
      />
      <button
        onClick={e => {
          props.dispatch(startRemoveExpense({ id: props.match.params.id }));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
