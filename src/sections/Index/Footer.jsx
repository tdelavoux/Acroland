import { Grid, Container, Link, Text } from "@nextui-org/react";

import { Box } from '/src/components/Blocs/Box.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Footer(){
    return (
        <section id="footer" className="bg-primary">
            <Container css={{ h: '100%'}} lg>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <Text h5 color="secondary">A propos de nous</Text>
                        <Box>
                            <FontAwesomeIcon icon={faTwitch} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </Box>
                        <Link color="secondary">Le personnel ultra sympa</Link>
                        <Link color="secondary">Informations presse</Link>
                        <Link color="secondary">Nous contacter</Link>
                    </Grid>
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <Text h5 color="secondary">Aide</Text>
                        <Link color="secondary">Préparer son séjour</Link>
                        <Link color="secondary">Plan du site</Link>
                        <Link color="secondary">FAQ</Link>
                    </Grid>
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <Text h5 color="secondary">Aide</Text>
                        <Link color="secondary">Mentions légales</Link>
                        <Link color="secondary">Données personnelles</Link>
                        <Link color="secondary">Paramètre des cookies</Link>
                    </Grid>
                </Grid.Container>
            </Container>
        </section>
    );
}
