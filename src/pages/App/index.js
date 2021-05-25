import React from 'react'

import { Header, Anchor, Box, Button, Heading, Form, FormField, MaskedInput, Paragraph} from 'grommet';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import 'firebase/firestore'
import 'firebase/auth'
import { v4 as uuidv4 } from 'uuid';

import firebaseRef from '../../firebaseRef'
import {FIREBASE_SHORTCODES_COLLECTION} from '../../constants'

import URLList from '../../components/url-list'
import NoURLs from '../../components/no-urls'

function Dashboard (props) {

    const [fullURL, setFullURL] = React.useState("")
    const [short, setShort] = React.useState("")
    const [errorText, setErrorText] = React.useState("")

    const [userURLExists, setUserURLExists] = React.useState(false)
    const [userURls, setUserURls] = React.useState(null)

    React.useEffect(() => {
        firebaseRef.firestore().collection(FIREBASE_SHORTCODES_COLLECTION).where("owner", "==", firebaseRef.auth().currentUser.uid).get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }));
                  // console.log("All data in 'shorts' collection", data); 
                  setUserURls(data)
                  setUserURLExists(true)
                  console.log(userURls)
            })
            .catch((error) => {
                // console.log("Error getting documents: ", error);
                setUserURls(null)
                setUserURLExists(false)
            });
            // eslint-disable-next-line
    }, [])

    let history = useHistory()

    function onLogoutPress (e) {
        firebaseRef.auth().signOut().then(() => {
            // Sign-out successful.
            history.push('/')
            window.location.reload(); // forces a window reload, fixes the issue at https://github.com/sanchitkalra/bphc-url-shortner/issues/1
          }).catch((error) => {
            // An error happened.
          });
    }

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    
        return !!pattern.test(str);
    }

    function onShortPress (e) {
            if (validURL(fullURL)) {
                setErrorText("")

                if (short) {
                    setErrorText("")
                    if (short !== "app" && short !== "auth" && short !== "faq") {
                        
                        firebaseRef.firestore().collection(FIREBASE_SHORTCODES_COLLECTION).doc(short).get().then((doc) => {
                            if (!doc.exists) {
                                console.log("Shortcode available")
                                firebaseRef.firestore().collection(FIREBASE_SHORTCODES_COLLECTION).doc(short).set({
                                    id: uuidv4(),
                                    fullURL: fullURL,
                                    owner: firebaseRef.auth().currentUser.uid,
                                    short: short
                                }).then(() => {
                                    console.log("Document successfully written!");
                                    setErrorText("Shortcode created 🎉")
                                    console.log(fullURL)
                                    window.location.reload();
                                })
                                .catch((error) => {
                                    console.error("Error writing document: ", error);
                                });
                            } else {
                                console.log("Shortcode unavailable")
                                setErrorText("This shortcode has already been claimed")
                            }
                        })

                    } else {
                        setErrorText(`Can't use reserved Shortcode '${short}'`)
                    }
                }

            } else {
                setErrorText("Enter a valid URL")
            }
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
                <Heading level="3">
                    Enter a URL to shorten
                </Heading>
                <Form>
                    <FormField label="URL" name="url" required>
                        <MaskedInput
                            name="url"
                            value={fullURL}
                            onChange={e => {
                                setFullURL(e.target.value)
                            }}
                        />
                    </FormField> 
                    <br />
                    <FormField label="Shortcode" name="shortcode" required>
                        <MaskedInput
                            name="shortcode"
                            value={short}
                            onChange={e => {
                                setShort(e.target.value)
                            }}
                        />
                    </FormField>  
                    <br />   
                    {
                        errorText ? <Paragraph>{errorText}</Paragraph> : <Paragraph></Paragraph>
                    }
                    <Button onClick={e => {
                        onShortPress()
                    }} alignSelf="center" primary label="Shorten" />        
                </Form>
            </Box>
            <Box pad={{ "left": "xlarge", "right": "xlarge" }}>
                {userURLExists ? <URLList userURls={userURls} /> : <NoURLs />}
            </Box>
        </Box>
    )

}

export default Dashboard