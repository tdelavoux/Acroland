import { Container, Row, Link, Text } from '@nextui-org/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCalendar } from "@fortawesome/free-solid-svg-icons";

import '/src/assets/styles/NavTop.scss'

export function NavTop(){
    return (
        <nav className="navbar">
            <Container css={{ h: '100%'}} lg>
                <Row css={{ h: '100%'}} align="center" justify="space-between">
                    <div className="flex ai-c jc-c">
                        <img src="/img/squirrel.svg" alt="Your SVG" height="40px" className="logo"/>
                        <span className="uppecase app-name">Acroland</span>
                    </div>

                    <div className="gap10">
                        <Link color="secondary" href="#" css={{ px:10 }}>
                            Activités
                        </Link>
                        <Text b color="secondary" css={{p:2}}>&#x2022;</Text>
                        <Link color="secondary" href="#" css={{ px:10 }}>
                            Tarifs
                        </Link>
                        <Text b color="secondary" css={{p:2}}>&#x2022;</Text>
                        <Link color="secondary" href="#" css={{ px:10 }}>
                            Logements
                        </Link>
                    </div>

                    <div className="nav-bloc-infos flex ai-c gap10">

                        <div className="nav-bloc-infos-tel flex-column">
                            <span>+336.99.99.99.99</span>
                            <span>+333.00.00.00.00</span>
                        </div>
                        <button role="button" className="nav-button"><FontAwesomeIcon icon={faCommentDots} /></button>
                        <button role="button" className="nav-button"><FontAwesomeIcon icon={faCalendar} /></button>
                    </div>
                </Row>
            </Container>
        </nav>
    );
}
