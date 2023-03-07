import { Grid, Container, Image, Text } from "@nextui-org/react";
import { Map } from '/src/components/Google/Map.jsx';

export function Access(){
    return (
        <section>
            <Container css={{ h: '100%'}} lg>
                <h3>Localisation</h3>
                <Text >
                    20 minutes de Montbéliard – 30 minutes de Belfort
                </Text>
                <Image height={300} src="/img/map.jpg" />
            </Container>
        </section>
    );
}
