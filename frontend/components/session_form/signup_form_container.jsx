import { connect } from 'react-redux';
import {signup} from '../../actions/session';
import React from 'react';
import {Link} from 'react-router-dom'
import SignupForm from './signup_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign Up'
        // nav link

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)

