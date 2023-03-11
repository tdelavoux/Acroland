import { Grid, Container } from "@nextui-org/react";
import { LogementCard } from '/src/components/Logement/LogementCard.jsx';

import '/src/assets/styles/Logement.scss'

export function Logement(){
    return (
        <section id="logement" className="w100 bg-primary">
            <Container css={{ h: '100%'}} lg>
                <h3>Préparez votre séjour à Montenois</h3>
                <h5>Profitez des logements à votre disposition pour prendre le temps d'appécier votre temps dans la nature.</h5>

                <Grid.Container gap={2} justify="center">
                    <Grid xs={12} sm={3}>
                        <LogementCard url="https://www.hebergement-insolite.com/dyn/image/image/5767.jpg" text="Logements Insolites" sub="Roulottes pour 2 à 5 places"/>
                    </Grid>
                    <Grid xs={12} sm={3}>
                        <LogementCard url="https://www.escale-chateaux-loire.fr/wp-content/uploads/2018/10/Tipi.jpg" text="Tentes & Tippies" sub="2 à 4 places"/>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <LogementCard url="https://www.skiinluxury.com/blog/wp-content/uploads/2019/10/AWOL-LR-22.jpg" text="Maison d'hôte" sub="Chalet de 32 couchages"/>
                    </Grid>

                </Grid.Container>

            </Container>
        </section>
    );
}
