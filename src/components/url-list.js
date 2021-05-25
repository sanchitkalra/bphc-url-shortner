import {Box, Heading, Paragraph} from 'grommet'
import ListGroup from 'react-bootstrap/ListGroup'
import ListItem from './list-item'

export default function URLList(props) {
    return (
        <Box pad={{ "bottom": "xlarge"}}>
            <Heading level="3">
                Your URLs
            </Heading>
            <Paragraph fill="true">
                All your shorten URLs are available at https://bp-hc.xyz/your-shortcode
            </Paragraph>
            <Paragraph fill="true">
                Click on any link and copy it to the clipboard
            </Paragraph>
            {
                props.userURls.length ? 
                    <ListGroup>
                        {
                            props.userURls.map(url => (
                                <ListItem
                                    url={url} 
                                />
                            ))
                        }
                    </ListGroup> : <div></div>
            }

        </Box>
    )
}