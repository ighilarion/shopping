import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../../utils/firebase/firebase.utils'

function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Log</button>
            <h1>SignIn</h1>
        </div>
    )
}

export default SignIn