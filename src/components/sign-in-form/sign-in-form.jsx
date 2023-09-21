import React, { useState } from 'react'
import { signInWithGooglePopup, signInAuthWithUserAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.scss'
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const resetFormField = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInAuthWithUserAndPassword(email, password);
            resetFormField();
        } catch (error) {
            switch (error.code) {
                case "auth/invalid-login-credentials":
                    alert('email doesn´t exist')
                    break;
                default:
                    alert(error.message)

            }
            console.log(error.message);
        }
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    required
                    name='email'
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    name='password'
                    onChange={handleChange}
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit' >SIGN IN</Button>
                    <Button type='button' onClick={logGoogleUser} buttonType='google' >GOOGLE SIGN IN</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm