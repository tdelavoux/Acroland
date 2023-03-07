
import { Grid } from "@nextui-org/react";
import { ActiviteCard } from '/src/components/Activites/ActiviteCard.jsx';

export const ParcoursGrid = () => (
    <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://recreanice.fr/sites/default/files/contenus/articles/img_6228_-_copie.jpeg" title="Parcours enfants" text="2 parcours de 3 et 5 ans agréés éducation nationale"/>
        </Grid>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://www.france-voyage.com/visuals/props/parc-accrobranche-cornille-aventure-119784-1_w600.webp" title="Parcours familliaux" text="8 parcours de facile à difficile pour s'amuser en famille."/>
        </Grid>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Accrobranche_floreval.jpg/800px-Accrobranche_floreval.jpg" title="Parcours physiques" text="3 parcours pour repousser ses limites."/>
        </Grid>
    </Grid.Container>
);