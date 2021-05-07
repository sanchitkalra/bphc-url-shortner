import React from 'react'

import {Box, Heading, Paragraph} from 'grommet'

function FAQElement(props) {
    return (
        <>
            <Box alignContent="center" alignSelf="center" align="center">
                <Heading margin="none" level="4" textAlign="center">{props.title}</Heading>
                <Paragraph textAlign="center">{props.answer}</Paragraph>
            </Box>
            <br />
        </>
    )
}

export default FAQElement