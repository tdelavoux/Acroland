
import { Grid } from "@nextui-org/react";
import { ActiviteCard } from '/src/components/Activites/ActiviteCard.jsx';

export const FunBoxGrid = () => (
    <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://acroland25.com/wp-content/uploads/elementor/thumbs/20180618_165731-scaled-oi3ua3qjgm056vcdlttqeyjjmi1zrmpqmcerwvvgdc.jpg" title="Filet labyrinthe " text="Pour les enfants de 3 à 10 ans. Parcours d'équilibre et de motricité."/>
        </Grid>
    </Grid.Container>
);