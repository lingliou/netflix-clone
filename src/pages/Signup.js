import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../context/firebase'
import { useHistory } from 'react-router-dom'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from "../components"
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    
    const [firstname, setFirstname] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const isInvalid = firstname === '' || password === '' || emailAddress === ''
    
    const handleSignup = event => {
        event.preventDefault()
        
        //firebase authentication
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            //when success, updateProfile. -> then go to browse page
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstname,
                    photoURL: Math.floor(Math.random() * 5 ) + 1
                })
                .then(() => {
                    setEmailAddress('')
                    setPassword('')
                    setError('')
                    history.push(ROUTES.BROWSE)
                })
            ).catch((error) => setError(error.message)) //if failed, show error
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title> Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit = {handleSignup} method = 'POST'>
                    <Form.Input
                        placeholder = "Your Firstname"
                        value={firstname}
                        onChange = {({target}) => {setFirstname(target.value)}}
                    />
                    <Form.Input
                        placeholder = "Your Email"
                        value={emailAddress}
                        onChange = {({target}) => {setEmailAddress(target.value)}}
                    />
                    <Form.Input
                        placeholder = "Your Password"
                        value={password}
                        type='password'
                        autoComplete = 'off'
                        onChange= { ({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled = {isInvalid} type = 'submit'>Sign Up</Form.Submit>
                    <Form.Text>
                        Already a member? <Form.Link to="/signin">Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                    This page is protected by Google reCAPTCHA.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
    )
}

