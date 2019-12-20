import React from 'react'
import{connect} from 'react-redux'
import {login} from '../../actions/session'
import LoginForm from './login_form'

const mapStateToProps = ({ errors }) => {
    return {
         errors: errors.session,
        formType: 'Log In'
        // nav link

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginForm: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
