import React from 'react'

import { Header, Anchor, Box, Heading} from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { Link } from 'react-router-dom';

import FAQElement from '../../components/faq-element'
import FooterSimple from '../../components/footer_simple';

function FAQ () {

    return (
        <Box >
            <Header background="light-4" pad="medium" height="xsmall">
            <Box>
                <Link to="/">
                    <Anchor
                        icon={<LinkPrevious color="brand" />}
                    />
                </Link>
            </Box>
            </Header>
            <Box pad="large">
                <Heading alignSelf="center" margin="xlarge" textAlign="center">FAQs</Heading>
                <FAQElement 
                    title="Why?"
                    answer="BPHC has no one central self branded URL shortner unlike its sister Goa campus."
                />
                <FAQElement 
                    title="Is it open to all?"
                    answer="Yes, anyone with a valid BITS (Hyderabad) provided email account can use this service."
                />
                {/* <Box alignContent="center" alignSelf="center" align="center">
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
                <Box alignContent="center" alignSelf="center" align="center">
                    <Heading margin="none" level="4" textAlign="center">I have another question</Heading>
                    <Paragraph textAlign="center">Please reach out at f20202298@hyderabad.bits-pilani.ac.in or you can DM on Twitter.</Paragraph>
                </Box>
                <br /> */}
            </Box>
            <FooterSimple />
            {/* <Footer alignContent="center" alignSelf="center" align="center">
                <Text alignSelf="center" textAlign="center" margin="xlarge">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor></Text>
            </Footer> */}
        </Box>
    )

}

export default FAQ