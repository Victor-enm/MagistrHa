<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Monument"
      imageAlt="Monument aux morts"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <Situation
        position="Monument aux morts"
        etape="04/07"
        />
        <h1>Le fort du Hâ, lieu de la répression durant l’Occupation à Bordeaux </h1>
            <p>L’occupation allemande durant la Seconde Guerre mondiale marque un épisode sombre de l’histoire de la prison du Hâ qui fut utilisée comme lieu de détention, d’interrogatoire et de torture par la police allemande à Bordeaux entre 1940 et 1945. </p>
            <p>De nombreux résistantes et résistants y furent emprisonnés avant d’être déportés vers les camps de concentration, ou fusillés au camp de Souge, près de Bordeaux.  On y retrouve&nbsp;: </p>
            <ScrollHorizontal>
              <CardPersonnage v-for="(item, i) in cardsPersonnage1" :key="'a'+i" :nom="item.nom" :date="item.date" :img="item.img"  :alt="item.alt"/>
            </ScrollHorizontal>

            <p>Des femmes et des hommes, qui pour la plupart étaient juifs, transitent également par le fort du Hâ avant leur transfert à Drancy, puis vers les camps d’extermination en Pologne. Parmi eux, Léon Librach, cousin de Hersz Librach, témoin lors du procès Papon à Bordeaux en 1998.</p>

            <p>Un monument en granit gris, érigé en 1985 dans la cour du fort, adossé à la tour des Minimes, commémore ces victimes et abrite des cendres recueillies dans les camps de concentration.</p>

            <ImageViolet
            :img="Monument"
            alt="Zoom sur l'inscription du monument aux morts" 
            />
            <p>Une plaque rappelle&nbsp;:</p>
            <EncartVert>
              <p class="font-MtItalic mt-0 text-xl">“&nbsp;Aux Déportés Internés et aux Résistants de la Gironde morts pour la France dans l’univers concentrationnaire nazi 1940-1945&nbsp;”</p>
            </EncartVert>


    <EncartViolet>
        <p>L’odyssée du «&nbsp;train fantôme&nbsp;» débute à Toulouse le 3 juillet 1944. Près de 550 prisonniers juifs, résistants, réfugiés espagnols et italiens y sont entassés. </p>
        <ImageViolet
            :img="Train"
            alt="Photo/Illustration du départ du train fantôme" 
            style="box-shadow: 6px 6px 0 #FFFFFF;"
            />
            <p>Bloqué à Angoulême, il revient à Bordeaux du 12 juillet au 9 août. 150 prisonniers du fort du Hâ s’ajoutent alors au convoi. Les conditions sont épouvantables&nbsp;: chaleur, manque d’eau et de nourriture. </p>
            <p>Le convoi poursuit sa route, retardé jusqu’à son arrivée à Dachau le 28 août 1944, après 52 jours de calvaire, pour un trajet qui durait habituellement trois jours. Ce convoi reste dans l’histoire comme le plus long de la déportation française.</p>
    </EncartViolet>
</section>
<EtMaintenant 
    BgColor="bg-marron"
    />
  </div>
</template>

<script setup>
import ImageViolet from '@/components/ImageViolet.vue';
import Monument from '@/assets/Images/banner/Monument-aux-morts.webp'
import Train2 from '@/assets/Images/generales/etape 4.webp'
import Train from '@/assets/Images/generales/Train.webp'
import ReneDarriet from '@/assets/Images/Portraits/renee-darriet.webp'
import AndreeDeJongh from '@/assets/Images/Portraits/Andrée de Jongh.webp'
import LaureGatet from '@/assets/Images/Portraits/laure-gatet.webp'
import AurorePica from '@/assets/Images/Portraits/Aurore Pica.webp'
import AndreeTamise from '@/assets/Images/Portraits/Andrée Tamise.webp'
import PauletteSauboua from '@/assets/Images/Portraits/PauletteSauboua.webp'
import LucienNouaux from '@/assets/Images/Portraits/Lucien Nouaux.webp'
import RobertDarniche from '@/assets/Images/Portraits/Robert Darniche.webp'
import MaxCoyne from '@/assets/Images/Portraits/Max Coyne.webp'
import RaoulBatany from '@/assets/Images/Portraits/Raoul Batany.webp'
import SergeDuhourquet from '@/assets/Images/Portraits/Serge Duhourquet.webp'
import PauxCazaux from '@/assets/Images/Portraits/Paux Cazaux.webp'
import Republicains from '@/assets/Images/Portraits/Republicains.webp'
import Opposants from '@/assets/Images/Portraits/Opposants.webp'
import EtMaintenant from '@/components/EtMaintenant.vue';


const cardsPersonnage1 = [
  { nom: 'René Darriet', img: ReneDarriet, alt: 'Photo ou illustration de René Darriet,', date: '1911 - 2010' },
  { nom: 'Andrée De Jongh', img: AndreeDeJongh, alt: 'Photo ou illustration de Andrée De Jongh,', date: '1916 - 2007' },
  { nom: 'Laure Gatet', img: LaureGatet, alt: 'Photo ou illustration de Laure Gatet,', date: '1913 - 1943' },
  { nom: 'Aurore Pica', img: AurorePica, alt: 'Photo ou illustration de Aurore Pica,', date: '1923 - 1943' },
  { nom: 'Andrée Tamise', img: AndreeTamise, alt: 'Photo ou illustration de Andrée Tamise,', date: '1922 - 1943' },
  { nom: 'Paulette Sauboua', img: PauletteSauboua, alt: 'Photo ou illustration de Paulette Sauboua,', date: '' },
  { nom: 'Lucien Nouaux', img: LucienNouaux, alt: 'Photo ou illustration de Lucien Nouaux,', date: '1921 - 1944' },
  { nom: 'Robert Darniche', img: RobertDarniche, alt: 'Photo ou illustration de Robert Darniche,', date: '1910 - 1944' },
  { nom: 'Max Coyne', img: MaxCoyne, alt: 'Photo ou illustration de Max Coyne,' },
  { nom: 'Raoul Batany', img: RaoulBatany, alt: 'Photo ou illustration de Raoul Batany,' },
  { nom: 'Serge Duhourquet', img: SergeDuhourquet, alt: 'Photo ou illustration de Serge Duhourquet,', date: '1926 - 1944' },
  { nom: 'Paux Cazaux', img: PauxCazaux, alt: 'Photo ou illustration de Paux Cazaux,' },
  { nom: 'Des républicains espagnols', img: Republicains, alt: 'Photo ou illustration Des républicains espagnols,' },
  { nom: 'Des opposants politiques', img: Opposants, alt: 'Photo ou illustration Des opposants politiques,' },
]


</script>