import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const AddFond = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <Field name="ticker" component="input" type="text" placeholder="Ticker" />
    <Field name="name" component="input" type="text" placeholder="Name" />
    <button type="submit">Add fond</button>
  </form>;

AddFond.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'AddFond',
})(AddFond);
