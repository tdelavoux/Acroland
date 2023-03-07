import { Container, Button } from '@nextui-org/react';

import '/src/assets/styles/Header.scss'

export function Header(){
    return (
        <section className="header w100">
            <Container css={{ h: '100%'}} className="flex-column ai-c jc-c gap10">
                {/* todo convertir les classes en native NextUi */}
                <h1>Au coeur de Montenois</h1>
                <h4>D'arbres en arbres, de branches en branches, découvrez des sensations uniques au plus profond de la nature</h4>
                <div>
                    <Button auto bordered color="default" rounded css={{color:'#fff', borderColor:'#fff'}}>
                        Réserver
                    </Button>
                </div>
                <div className="flex ai-c gap10">
                    <div className="header-activite flex-column ai-c jc-c">
                        <img src="/img/tree.png" width={50}/>
                        <label>Acrobranche</label>
                    </div>
                    <div className="header-activite flex-column ai-c jc-c">
                        <img src="/img/golf-club.svg" width={50}/>
                        <label>Mini-Golf</label>
                    </div>
                    <div className="header-activite flex-column ai-c jc-c">
                        <img src="/img/camping.png" width={50}/>
                        <label>Camping</label>
                    </div>
                    <div className="header-activite flex-column ai-c jc-c">
                        <img src="/public/img/bbq.png" width={50}/>
                        <label>Restauration</label>
                    </div>
                </div>
            </Container>
        </section>
    );
}
