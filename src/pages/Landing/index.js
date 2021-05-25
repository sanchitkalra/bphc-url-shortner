import React from 'react'

import { Header, Anchor, Box, ResponsiveContext, Menu, Heading, Button } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';
import { Link } from 'react-router-dom';
import FooterSimple from '../../components/footer_simple';

function Landing () {

    return (
        <Box>
            <Header background="light-4" pad="medium" height="xsmall">
                <Box>
                    <Link to='/'>
                        <Anchor
                            label="BPHC URL Shortening Service"
                        />
                    </Link>
                </Box>
                <ResponsiveContext.Consumer>
                    {size =>
                        size === 'small' ? (
                            <Box justify="end">
                            <Menu
                                a11yTitle="Navigation Menu"
                                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                                icon={<MenuIcon color="brand" />}
                                items={[
                                {
                                    label: <Box pad="small">FAQ</Box>,
                                    as: Link,
                                    to: '/faq'
                                },
                                {
                                    label: <Box pad="small">Login</Box>,
                                    as: Link,
                                    to: '/auth'
                                },
                                ]}
                            />
                            </Box>
                        ) : (
                            <Box justify="end" direction="row" gap="medium">
                            <Link to='/faq'>
                                <Anchor
                                    label="FAQ"
                                />
                            </Link>
                            <Link to='/auth'>
                                <Anchor
                                    label="Login"
                                />
                            </Link>
                            </Box>
                        )
                    }
                </ResponsiveContext.Consumer>
            </Header>
            <Box>
                <Heading alignSelf="center" margin="xlarge" textAlign="center">a free URL shortening service for students of BPHC</Heading>
                <Heading alignSelf="center" textAlign="center" level="3">this project is highly inspired by BPGC's URL shortening service, and frankly, I wasn't happy we didn't have one, xD</Heading>
                <Box align="center" alignSelf="center" alignContent="center">
                    <Link to='/auth'>
                        <Button
                            label="signin to create your own"
                        >
                        </Button>
                    </Link>
                    {/* <Link to='/auth'>
                        <Anchor alignSelf="center" label="signin to create your own" />
                    </Link> */}
                </Box>
                <FooterSimple />
            </Box>
        </Box>
    )

}

export default Landing