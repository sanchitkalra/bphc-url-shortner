import React from 'react'

import { Header, Anchor, Box, Heading, Text } from 'grommet';
import { LinkPrevious } from 'grommet-icons';

import { BASE_URL } from './../../constants'

function FAQ () {

    return (
        <Box>
            <Header background="light-4" pad="medium" height="xsmall">
            <Anchor
                href={BASE_URL}
                icon={<LinkPrevious color="brand" />}
            />
            </Header>
            <Box>
                <Heading alignSelf="center" margin="xlarge" textAlign="center">FAQs</Heading>
                <Text alignSelf="center" margin="xlarge">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor> and <Anchor href="https://v2.grommet.io/">Grommet Design</Anchor></Text>
            </Box>
        </Box>
    )

}

export default FAQ