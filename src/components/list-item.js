import { Paragraph } from 'grommet'
import React from 'react'
import {Card, Button} from 'react-bootstrap'

import { FIREBASE_SHORTCODES_COLLECTION } from '../constants'
import firebaseRef from '../firebaseRef'

export default function ListItem(props) {

    const [copied, setCopied] = React.useState(false)

    function deleteObj(e) {
        firebaseRef.firestore().collection(FIREBASE_SHORTCODES_COLLECTION).doc(props.url.short).delete().then(() => {
            console.log("Document successfully deleted!")
            window.location.reload();
        }).catch((error) => {
            console.error("Error removing document: ", error)
        });
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{props.url.fullURL}</Card.Title>
                    <Card.Link onClick={() => {
                            navigator.clipboard.writeText("https://bp-hc.xyz/" + props.url.short)
                            setCopied(true)
                        }}>{props.url.short}</Card.Link>
                    {
                        copied ? 
                            <Paragraph>
                                Copied to clipboard!
                            </Paragraph>
                        : <></>
                    }
                    <br /><br />
                    <Button variant="danger" onClick={deleteObj}>Delete</Button>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}