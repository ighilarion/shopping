import React from 'react'

import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form';
import './authentication.styles.scss'

function Authentication() {

    return (
        <div className='auth-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication