import React from 'react'

import { Header, Anchor, Box, Heading, Text, Footer, Paragraph } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import { BASE_URL } from './../../constants'

function FAQ () {

    return (
        <Box >
            <Header background="light-4" pad="medium" height="xsmall">
            <Anchor
                href={BASE_URL}
                icon={<LinkPrevious color="brand" />}
            />
            </Header>
            <Box pad="large">
                <Heading alignSelf="center" margin="xlarge" textAlign="center">FAQs</Heading>
                <Box alignContent="center" alignSelf="center" align="center">
                    <Heading margin="none" level="4" textAlign="center">Why?</Heading>
                    <Paragraph textAlign="center">BPHC has no one central self branded URL shortner unlike its sister Goa campus.</Paragraph>
                </Box>
                <br />
                <Box alignContent="center" alignSelf="center" align="center">
                    <Heading margin="none" level="4" textAlign="center">Is it open to all?</Heading>
                    <Paragraph textAlign="center">Yes, anyone with a valid BITS (Hyderabad) provided email account can use this service.</Paragraph>
                </Box>
                <br />
                <Box alignContent="center" alignSelf="center" align="center">
                    <Heading margin="none" level="4" textAlign="center">Who's managing this service?</Heading>
                    <Paragraph textAlign="center">This service is managed by the maintainer(s) and is affiliated with no clubs, departments, or associations.</Paragraph>
                </Box>
                <br />
                <Box alignContent="center" alignSelf="center" align="center">
                    <Heading margin="none" level="4" textAlign="center">Where can complaints be sent?</Heading>
                    <Paragraph textAlign="center">Complaints can be sent to f20202298@hyderabad.bits-pilani.ac.in if you find any objectionable or unlawful content.</Paragraph>
                </Box>
                <br />
            </Box>
            <Footer alignContent="center" alignSelf="center" align="center">
                <Text alignSelf="center" textAlign="center" margin="xlarge">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor></Text>
            </Footer>
        </Box>
    )

}

export default FAQ