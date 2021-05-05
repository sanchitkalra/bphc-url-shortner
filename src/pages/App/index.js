import React from 'react'

import { Header, Anchor, Box, Button, Heading, Form, FormField, MaskedInput } from 'grommet';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'

import firebaseRef from '../../firebaseRef'

function Dashboard (props) {

    let history = useHistory()

    function onLogoutPress (e) {
        firebaseRef.auth().signOut().then(() => {
            // Sign-out successful.
            history.push('/')
            window.location.reload(true); // forces a window reload, fixes the issue at https://github.com/sanchitkalra/bphc-url-shortner/issues/1
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <Box>
            <Header background="light-4" pad="medium" height="xsmall">
                <Box>
                    <Link to='/app'>
                        <Anchor
                            label="Dashboard"
                        />
                    </Link>
                </Box>
                <Box justify="end" direction="row" gap="medium">
                    <Button
                        onClick={onLogoutPress}
                        label="Logout"
                    />
                </Box>
            </Header>
            <Box pad="xlarge">
                <Heading level="3" alignSelf="center">
                    Enter a URL to shorten
                </Heading>
                <Form>
                    <FormField label="URL" name="url" required>
                        <MaskedInput
                            name="url"
                        />
                    </FormField> 
                    <br />
                    <FormField label="Shortcode" name="shortcode" required>
                        <MaskedInput
                            name="shortcode"
                        />
                    </FormField>             
                </Form>
            </Box>
        </Box>
    )

}

export default Dashboard