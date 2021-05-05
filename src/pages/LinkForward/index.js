import React from 'react'

import { Box, Heading } from 'grommet'
import { useParams } from 'react-router-dom'
import 'firebase/firestore'

import firebaseRef from '../../firebaseRef';
import {FIREBASE_SHORTCODES_COLLECTION} from '../../constants'

function LinkForward () {

    let { id } = useParams();

    // eslint-disable-next-line
    const [fullURL, setFullURL] = React.useState("")
    const [validID, setValidID] = React.useState(true)

    React.useEffect(() => {
        firebaseRef.firestore().collection(FIREBASE_SHORTCODES_COLLECTION).doc(id).get().then((doc) => {
            if (doc.exists) {
                var url = doc.data().fullURL
                // console.log("Document data:", doc.data());
                setFullURL(doc.data().fullURL)
                setValidID(true)
                if (!doc.data().fullURL.match(/^[a-zA-Z]+:\/\//)) {
                    url = "https://" + url
                }
                window.location.href = url;
            } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
                setFullURL("")
                setValidID(false)
            }
        })
        // eslint-disable-next-line
    }, [])

    return(
        <Box align="center" alignContent="center" alignSelf="center">
            {
                validID ? <Heading level="4">Checking...</Heading> : <Heading textAlign="center" align="center" alignSelf="center" alignContent="center" level="4">Oops, that URL couldn't be found. Please double check the link.</Heading>
            }
        </Box>
    )
}

export default LinkForward