import React, { useState } from 'react'
import { createUserDocumentFromAuth, signUpWithUserAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const resetFormField = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password != confirmPassword) {
            alert("Password do not match")
            return;
        }
        try {
            const { user } = await signUpWithUserAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormField();

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email alredy on use')
            }
            console.log(error.message);
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    name='displayName'
                    onChange={handleChange}
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    name='confirmPassword'
                    onChange={handleChange}
                    value={confirmPassword}
                />

                <Button type='submit' >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm