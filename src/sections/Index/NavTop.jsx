import React from 'react'
import { Navbar, Container, Text, Row, Link } from '@nextui-org/react'

import { NavButton } from '/src/components/NavBar/NavButton.jsx'
import { Box } from '/src/components/Blocs/Box.jsx'
import { AcolandLogo } from '/src/components/Branding/AcolandLogo.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCalendar } from "@fortawesome/free-solid-svg-icons"

import '/src/assets/styles/NavTop.scss'

export function NavTop(){
    return (
        <Box width="100%" css={{ bc: '$primary'}} className="navbar">
            <Container css={{ h: '100%'}} lg>
                <Row css={{ h: '100%'}} align="center" justify="space-between">
                    <Box className="flex ai-c jc-c">
                        <AcolandLogo />
                        <Text b transform="uppecase" color="secondary" css={{ mx:10 }} hideIn="xs">
                            Acroland
                        </Text>
                    </Box>

                    <Box>
                        <Link color="secondary" href="#" css={{ px:10 }}> Activités </Link>
                        <Text b color="secondary" css={{p:2}}>&#x2022;</Text>
                        <Link color="secondary" href="#" css={{ px:10 }}> Tarifs </Link>
                        <Text b color="secondary" css={{p:2}}>&#x2022;</Text>
                        <Link color="secondary" href="#" css={{ px:10 }}> Logements </Link>
                    </Box>

                    <Box className="nav-bloc-infos flex ai-c gap10">

                        <Box className="nav-bloc-infos-tel flex-column">
                            <Text css={{fs:'0.7rem'}} color="secondary">+336.99.99.99.99</Text>
                            <Text css={{fs:'0.7rem'}} color="secondary">+333.00.00.00.00</Text>
                        </Box>
                        <NavButton content={<FontAwesomeIcon icon={faCommentDots} />}/>
                        <NavButton content={<FontAwesomeIcon icon={faCalendar} />}/>
                    </Box>
                </Row>
            </Container>
        </Box>
    );
}