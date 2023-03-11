import { Grid, Container} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import '/src/assets/styles/footer.scss'

export function Footer(){
    return (
        <section id="footer" className="bg-primary">
            <Container css={{ h: '100%'}} lg>
                <Grid.Container gap={2} justify="center">
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <h5>A propos de nous</h5>
                        <div className="flex ai-c gap10">
                            <FontAwesomeIcon icon={faTwitch} />
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <a href="#">Le personnel ultra sympa</a>
                        <a href="#">Informations presse</a>
                        <a href="#">Nous contacter</a>
                    </Grid>
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <h5>Aide</h5>
                        <a href="#">Préparer son séjour</a>
                        <a href="#">Plan du site</a>
                        <a href="#">FAQ</a>
                    </Grid>
                    <Grid xs={4}  css={{ flexDirection: "column", alignItems: "flex-start" }}>
                        <h5>Conditions</h5>
                        <a href="#">Mentions légales</a>
                        <a href="#">Données personnelles</a>
                        <a href="#">Paramètre des cookies</a>
                    </Grid>
                </Grid.Container>
                
            </Container>
        </section>
    );
}
