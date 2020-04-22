import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

const SurveyForm = props => {
    const renderFields = _.map(formFields, ({ label, name }) => {
        return <Field label={label} key={name} name={name} component={SurveyField} type="text" />
    });

    return (
        <div>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
                {renderFields}
                <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                <button className="teal btn-flat right white-text" type="submit">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>

        </div>
    );
};

const validate = (values) => {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => { 
        if (!values[name]) {
            errors[name] = `You must provide ${name}`;
        }
    });

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);