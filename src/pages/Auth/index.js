import React from 'react'
import {
    Box,
    Button,
    Form,
    FormField,
    MaskedInput,
    TextInput,
    Text,
    Header,
    Anchor
  } from 'grommet';

import { LinkPrevious } from 'grommet-icons';
import {Link} from 'react-router-dom'

import firebaseRef from '../../firebaseRef'

function verifyEmailValidity(email) {
    var reg = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(hyderabad.bits-pilani)\.ac.in$/
    if (reg.test(email)) {
        return true
    } 
    return false;
}

function Auth() {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    // the following states correspond to the disabled prop, hence false by default
    const [authButtonStates, setAuthButtonStates] = React.useState(false)

    function submitLogin(e) {
        if (email) {
            if (verifyEmailValidity(email)) {
                setAuthButtonStates(true)
                setEmailError("")
                firebaseRef.auth().signInWithEmailAndPassword(email, password).catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError("no account exists for that email, signup instead")
                            setAuthButtonStates(false)
                            break
                        case "auth/invalid-password":
                            setPasswordError(error.message)
                            setAuthButtonStates(false)
                            break
                        default:
                            setPasswordError('incorrect password')
                            setAuthButtonStates(false)
                    }
                }).then((user) => {
                    console.log(user)
                })
            } else {
                setEmailError("only BITS Hyderabad email addresses")
            }
        } else {
            setEmailError("")
        }
    }

    function submitCreateAccount(e) {
        if (email) {
            if (verifyEmailValidity(email)) {
                setAuthButtonStates(true)
                setEmailError("")
                firebaseRef.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                        case "auth/user-disabled":
                        case "auth/user-not-found":
                            setEmailError(error.message)
                            setAuthButtonStates(false)
                            break
                        case "auth/invalid-password":
                            setPasswordError(error.message)
                            setAuthButtonStates(false)
                            break
                        default:
                            setPasswordError('an unexpected error occurred')
                            setAuthButtonStates(false)
                    }
                }).then((user) => {
                    console.log(user)
                })
            } else {
                setEmailError("only BITS Hyderabad email addresses")
            }
        } else {
            setEmailError("")
        }
    }

        return(
            <Box>
                <Header pad="medium" height="xsmall">
                <Box>
                    <Link to="/">
                        <Anchor
                            icon={<LinkPrevious color="brand" />}
                        />
                    </Link>
                </Box>
                </Header>
                <Box fill align="center" justify="center">
                    <Box width="medium">
                        <Form>
                            <FormField label="Email" name="email" required>
                                <MaskedInput
                                    value={email}
                                    onChange={e => {
                                        setEmail(e.target.value)
                                    }}
                                    name="email"
                                    type="email"
                                />
                            </FormField>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Text>{emailError}</Text>
                            </Box>
                            <FormField label="Password" name="password" required>
                                <TextInput 
                                    name="password" 
                                    type="password"
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </FormField>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Text alignSelf="center">{passwordError}</Text>
                            </Box>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Button disabled={authButtonStates} onClick={submitLogin} type="submit" label="Login" primary />
                                <Button disabled={authButtonStates} onClick={submitCreateAccount} type="reset" label="Create Account" />
                            </Box>
                            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                                <Button disabled={authButtonStates} type="reset" size="small" label="Reset Password" />
                            </Box>
                        </Form>
                    </Box>
                </Box>
            </Box>
        )

}

export default Auth