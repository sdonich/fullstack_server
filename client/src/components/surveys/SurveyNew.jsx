import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = props => {
    const [isShowFormReview, setShowFormReview] = useState(false);

    const renderContent = isShowFormReview ?
        <SurveyFormReview
            onCancel={() => setShowFormReview(false)}
        />
        :
        <SurveyForm onSurveySubmit={() => setShowFormReview(true)} />;

    return (
        <div>
            {renderContent}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);