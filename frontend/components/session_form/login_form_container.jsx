import{connect} from 'react-redux'
import {login, clearErrors} from '../../actions/session'
import LoginForm from './login_form'

const mapStateToProps = ({ errors }) => {
    return {
         errors: errors.session,
         formType: 'Log In'

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
