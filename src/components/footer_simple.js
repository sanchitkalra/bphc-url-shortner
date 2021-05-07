import React from 'react'

import {Footer, Text, Anchor} from 'grommet'

function FooterSimple() {
    return (
        <Footer alignContent="center" alignSelf="center" align="center">
            <Text alignSelf="center" textAlign="center" margin="xlarge">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor></Text>
        </Footer>
    )
}

// <Box margin="xlarge">
//      <Text textAlign="center" alignSelf="center">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor></Text>
//      {/* <Text textAlign="center" alignSelf="center">disclaimer: this project is not officially associated with either BITS Pilani, Hyderabad Campus or any clubs, associations, or departments</Text> */}
// </Box>

export default FooterSimple