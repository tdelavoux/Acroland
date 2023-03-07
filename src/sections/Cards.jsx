import { Grid, Card, Text, Container, Image } from "@nextui-org/react";

import '/src/assets/styles/Cards.scss'

export function Cards(){
    return (
        <section className="cards w100 p0 mb-1">
            <Container md>
                <Grid.Container gap={5} justify="center" className="p0">
                    <Grid md={4}>
                        <Card isHoverable sm={3} css={{ mw: "400px", p:0 }} >
                            <Card.Body css={{alignItems: "flex-start" }}>  
                                <Image
                                    height={35}  
                                    src="https://cdn-icons-png.flaticon.com/512/1788/1788708.png "
                                    alt="quality badge"
                                    objectFit="cover"
                                />
                                <Text b className="card-content w100 flex ai-c jc-c">
                                    <span>Un parc de 7 hectars de forêt</span>
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid md={4}>
                        <Card isHoverable sm={3} css={{ mw: "400px", p:0 }}>
                            <Card.Body>
                                <Image
                                    height={35}  
                                    src="https://www.svgrepo.com/show/38295/quality.svg"
                                    alt="quality badge"
                                    objectFit="cover"
                                />
                                <Text b className="card-content  w100 flex ai-c jc-c">
                                    <span>Des professionnels certifiés CQP.</span>
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid md={4}>
                        <Card isHoverable sm={3} css={{ mw: "400px", p:0 }}>
                            <Card.Body>
                                
                                    <Image
                                        height={35}  
                                        src="https://cdn-icons-png.flaticon.com/512/3100/3100609.png"
                                        alt="BBQ"
                                        objectFit="cover"
                                    />
                                    <Text b className="card-content  w100 flex ai-c jc-c">
                                        <span>Soirées Barbecue 15 Personnes mini.</span>
                                    </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>
        </section>
    );
}