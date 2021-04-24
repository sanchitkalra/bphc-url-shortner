import React from 'react'
import {
    Box,
    Button,
    Form,
    FormField,
    MaskedInput,
    TextInput,
    Text
  } from 'grommet';

function verifyEmailValidity(email) {
    var reg = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(hyderabad.bits-pilani)\.ac.in$/
    if (reg.test(email)) {
        return true
    } 
    return false;
}

function Auth() {

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState(true)

    function submitForm(e) {
        if (verifyEmailValidity(email)) {
            console.log("yes")
            setEmailError(true)
        } else {
            console.log("neh")
            setEmailError(false)
        }
    }

    return(
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
                    <FormField label="Password" name="password">
                        <TextInput name="password" type="password"/>
                    </FormField>
                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button onClick={submitForm} type="submit" label="Login" primary />
                        <Button type="reset" label="Create Account" />
                    </Box>
                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        <Button type="reset" size="small" label="Reset Password" />
                    </Box>
                    <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                        {
                            emailError ? <Text></Text> : <Text>only BITS Hyderabad email addresses</Text>
                        }
                    </Box>
                </Form>
            </Box>
        </Box>
    )
}

export default Auth