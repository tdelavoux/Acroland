import { Grid, Container, Button } from "@nextui-org/react";
import { ParcoursGrid } from '/src/components/Activites/ParcoursGrid.jsx';
import { GolfGrid } from '/src/components/Activites/GolfGrid.jsx';
import { FunBoxGrid } from '/src/components/Activites/FunBoxGrid.jsx';
import { Tab } from '/src/components/Shared/Tab/Tab.jsx'

import '/src/assets/styles/Parcours.scss'

export function Activites(){
    return (
        <section>
            <Container css={{ h: '100%'}} lg>
                <h3>Nos Activités</h3>
                <h5>3 Activités à réaliser pour des heures de plaisir.</h5>

                <Tab content={
                    [
                        {'title': 'Acrobranche', 'content': <ParcoursGrid />, active:'active'},
                        {'title': 'Mini-Golf', 'content': <GolfGrid />},
                        {'title': 'Fun Box', 'content': <FunBoxGrid />},
                    ]
                } />  

                <Button auto color="primary" rounded>
                    Voir toutes les  activités
                </Button>

            </Container>
        </section>
    );
}
