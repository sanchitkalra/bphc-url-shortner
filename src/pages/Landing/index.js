import React from 'react'

import { Header, Anchor, Box, ResponsiveContext, Menu, Heading, Text } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

import { BASE_URL } from './../../constants'

function Landing () {

    return (
        <Box>
            <Header background="light-4" pad="medium" height="xsmall">
                <Anchor
                    href={BASE_URL}
                    label="BPHC URL Shortening Service"
                />
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
                                    href: `${BASE_URL}/faq`,
                                },
                                {
                                    label: <Box pad="small">Login</Box>,
                                    href: `${BASE_URL}/auth`,
                                },
                                ]}
                            />
                            </Box>
                        ) : (
                            <Box justify="end" direction="row" gap="medium">
                            <Anchor
                                href={`${BASE_URL}/faq`}
                                label="FAQ"
                            />
                            <Anchor
                                href={`${BASE_URL}/auth`}
                                label="Login"
                            />
                            </Box>
                        )
                    }
                </ResponsiveContext.Consumer>
            </Header>
            <Box>
                <Heading alignSelf="center" margin="xlarge" textAlign="center">a free URL shortening service for students of BPHC</Heading>
                <Heading alignSelf="center" textAlign="center" level="3">this project is highly inspired by BPGC's URL shortening service, and frankly, I wasn't happy we didn't have one, xD</Heading>
                <Anchor href={`${BASE_URL}/auth`} alignSelf="center" label="signin to create your own" />
                <Box margin="xlarge">
                    <Text textAlign="center" alignSelf="center">made with ❤️ by <Anchor href="https://twitter.com/sanchit_kalra1">@sanchit_kalra1</Anchor> and <Anchor href="https://v2.grommet.io/">Grommet Design</Anchor></Text>
                    <Text textAlign="center" alignSelf="center">disclaimer: this project is not officially associated with neither BITS Pilani, Hyderabad Campus nor any clubs, assocs, or departments</Text>
                </Box>
            </Box>
        </Box>
    )

}

export default Landing