import { Container, Button, Text, Row, Image } from '@nextui-org/react';

import { Box } from '/src/components/Blocs/Box.jsx'

import '/src/assets/styles/Header.scss'

export function Header(){
    return (
        <section className="header w100">
            <Container css={{ h: '100%'}} className="flex-column ai-c jc-c gap10">
                {/* todo convertir les classes en native NextUi */}
                <Text h1 color="white">Au coeur de Montenois</Text>
                <Text h4 color="white">D'arbres en arbres, de branches en branches, découvrez des sensations uniques au plus profond de la nature</Text>
                <Button auto bordered color="white" rounded css={{color:'#fff', borderColor:'#fff'}}>
                    Réserver
                </Button>
                <Row align="center" justify="center">
                    <Box css={{ m:20 }}>
                        <Image src="/img/tree.png" width={50} height={50}/>
                        <Text color="white">Acrobranche</Text>
                    </Box>
                    <Box css={{ m:20 }}>
                        <Image src="/img/golf-club.svg" width={50} height={50}/>
                        <Text color="white">Mini-Golf</Text>
                    </Box>
                    <Box css={{ m:20 }}>
                        <Image src="/img/camping.png" width={50} height={50}/>
                        <Text color="white">Camping</Text>
                    </Box>
                    <Box css={{ m:20 }}>
                        <Image src="/img/bbq.png" width={50} height={50}/>
                        <Text color="white">Restauration</Text>
                    </Box>
                </Row>
            </Container>
        </section>
    );
}
