import React from 'react'
import { Field, reduxForm } from 'redux-form'
//import validate from '../validate/validate'
import NextButton from '../../next-button/NextButton';
import PrevButton from '../../prev-button/PreviousButton'
import Filter2Icon from '@material-ui/icons/Filter2';
import KxCard from '../../card/card';
import './wizard-form-third-page.scss';
import DatePicker from "../../date-box/DateBox";
//import SelectField from ' @material-ui/core/SelectField';
//import TextBox from '../../text-box/TextBox'
import TextField from '@material-ui/core/TextField';
//import FormControl from '@material-ui/core/FormControl'
const divisions = ['Digital Platform', 'Oil & Drilling', ' Product & Services', 'Other']
const departments = ['Engineering', 'HR', 'Admin', 'Finance', 'IT']

const validate = values => {
    const errors = {}
    const requiredFields = [
        'expenseDetail',
        'amount',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });
    return errors;
}
const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
const renderDateField = ({ label }) => (<DatePicker label={label} />)

const renderDivisionsSelector = ({ input, meta: { touched, error } }) => (
    <div className="display-name" >
        <select {...input}>
            <option className="display-name" value="">Division</option>
            {divisions.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)
const renderDepartmentSelector = ({ input, meta: { touched, error } }) => (
    <div className="display-name" >
        <select {...input}>
            <option value="">Department</option>
            {departments.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)
const WizardFormThirdPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex-container-page-3">
                <KxCard className="flex-KxCard-page-3">
                    <div className="flex-form-content-and-button">

                        {/* <div className="previous"> 
                        </PrevButton> </div>*/}
                        <div> <p className="heading3">Expense Details <span id="icon"> <Filter2Icon /></span></p></div>

                        <div className="flex-field-selector">

                            <div className="flex-field-department">   <Field name="department" component={renderDepartmentSelector} /></div>
                            <div className="flex-field-division">  <Field name="division" component={renderDivisionsSelector} /></div>

                        </div>
                        <Field name="expenseDate" component={renderDateField} label="Date of Expense" />
                        {/*  <TextBox name="expenseDetail" label="Expense Detail" />
                        <TextBox label="Amount" type="numeric" name="amount" />*/}

                        <Field name="expenseDetail" component={renderTextField} label="Expense Detail" />



                        <Field name="amount" component={renderTextField} label="Amount" />

                        <div className="flex-button-container-page-3">
                            <PrevButton type="button" onClick={previousPage} />
                            <NextButton className="next" label="Next" />
                        </div>
                    </div>
                </KxCard>



            </div>
        </form>
    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)