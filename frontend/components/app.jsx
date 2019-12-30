import React from 'react'
import {Route} from 'react-router-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import MainPageContainer from './main_page/main_page_container'
import {AuthRoute} from '../utils/route.util'
import {ProtectedRoute} from '../utils/route.util'

const App = () => (
    <section className="holder">
        <AuthRoute path = "/signup" component={SignupFormContainer}/>
        <AuthRoute path = "/login" component={LoginFormContainer}/>
        <ProtectedRoute exact path = "/" component={MainPageContainer}/>
    </section>


)

export default App

