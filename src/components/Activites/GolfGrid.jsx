
import { Grid } from "@nextui-org/react";
import { ActiviteCard } from '/src/components/Activites/ActiviteCard.jsx';

export const GolfGrid = () => (
    <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://basedurocher.fr/IMG/jpg/basedurocher_loisirs_minigolf3_1800x1200.jpg" title="Mini-Golf 18 trous" text=" Au milieu du parc, sous les chênes centenaires"/>
        </Grid>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/green-minigolf-saint-aubin-des-preaux-2.JPG" title="5 € / personnes" text="Accès direct au parcours."/>
        </Grid>
        <Grid xs={12} sm={4}>
            <ActiviteCard url="https://cdn-s-www.estrepublicain.fr/images/25920B25-2ECC-4AA2-8052-7401A48B5063/NW_raw/loisirs-mini-golf-oligolf-parc-de-la-pepiniere-nancy-20-juin-2020-le-mini-golf-du-parc-de-la-pepiniere-photo-alexandre-marchi-photo-er-alexandre-marchi-1653581665.jpg" title="Gratuit avec l'entrée au parc" text="Gratuit aces toute autre activité."/>
        </Grid>
    </Grid.Container>
);