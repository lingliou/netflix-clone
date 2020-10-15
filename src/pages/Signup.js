import React, {useState} from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from "../components"
import * as ROUTES from '../constants/routes'

export default function Signup(){
    const [firstname, setFirstname] = useState('')
    const [emaillAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstname==='' || password ==='' || emaillAddress === ''

    const handleSignup = event => {
        event.preventDefualt()

        //firebase 
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
                        onChange = {target => {setFirstname(target.value)}}
                    />
                    <Form.Input
                        placeholder = "Your Email"
                        value={emaillAddress}
                        onChange = {target => {setEmailAddress(target.value)}}
                    />
                    <Form.Input
                        placeholder = "Your Password"
                        value={password}
                        type='password'
                        autoComplete = 'off'
                        onChange= { target => setPassword(target.value)}
                    />
                    <Form.Submit disabled = {isInvalid} type = 'submit '>Sign Up</Form.Submit>
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