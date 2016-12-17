import React, { PropTypes } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = ({ input, type, label, onClick }) =>
  <input {...input} type={type} placeholder={label} onClick={onClick} />;

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const toNumber = str => Number.parseInt(str, 10);

class RenderFonds extends React.Component {
  componentWillMount() {
    const { fields } = this.props;
    fields.push({});
  }

  render() {
    const { fields } = this.props;

    return (<ul>
      <li>
        <Field name="date" component="input" type="text" placeholder="Date" />
      </li>
      {fields.map((fond, index) => {
        const onClick = () => index === fields.length - 1 && fields.push({});
        return (<li key={index}>
          <Field name={`${fond}.ticker`} component={renderField} label="ticker" type="text" onClick={onClick} />
          <Field name={`${fond}.amount`} component={renderField} label="amount" type="number" normalize={toNumber} onClick={onClick} />
          {index > 0 && <button type="button" onClick={() => fields.remove(index)}>Remove</button>}
        </li>);
      }
    )}
    </ul>);
  }
}

RenderFonds.propTypes = {
  fields: PropTypes.object.isRequired,
};

const AddDeposit = ({ handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <FieldArray name="fonds" component={RenderFonds} />
      <button type="submit">Submit</button>
    </div>
  </form>;

AddDeposit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tickers: PropTypes.array.isRequired,
};

export default reduxForm({
  form: 'addDeposit',
})(AddDeposit);
