<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Salle"
      imageAlt="vue en hauteur sur la salle des pas perdus équivalent au hall"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <Situation
        position="Salle des pas perdus"
        etape="07/07"
        />
        <h1>La salle des pas perdus : un lieu de rencontres, d’échanges et de débats</h1>
            <p>L’ENM est l’unique école de formation des magistrats de l’ordre judiciaire français, assurant la formation initiale des élèves magistrats et des publics spécialisés, ainsi que la formation continue des magistrats en exercice et de magistrats étrangers dans le cadre de coopérations.</p>
          <div class="py-6"><TimeLine
      v-for="(item, index) in timeline"
      :key="index"
      :titre="item.titre"
      :description="item.description"
      :img="item.img"
      :alt="item.alt"
    /></div>
    <ScrollHorizontal>
        <CardImage v-for="(item, i) in listImages" :key="'a'+i" :img="item.img"  :alt="item.alt" />
      </ScrollHorizontal>

    <p>L’ENM dispose également d’un second site historique sur l’île de la Cité à Paris, dans un bâtiment du XIXe siècle, situé entre le quai aux fleurs et la rue Chanoinesse, qui accueillait autrefois l’état-major des pompiers de Paris. </p>

    <ImageViolet
    :img="Paris"
    alt="Photo du batiment de l'ENM Paris"
    />
    <p>À la suite des annonces de l’État d’un recrutement historique de +1500 magistrats supplémentaire d’ici à 2027, l’ENM a inauguré en 2024 deux nouveaux bâtiments. </p>
    <p>À Bordeaux, boulevard Godard ; le site Archipel, qui accueille la moitié des auditeurs de justice de chaque promotion, est conçu pour porter une attention particulière à l’écologie et à la lumière naturelle.</p>

    <ImageViolet
    :img="Archipel"
    alt="Photo du deuxième site Bordelais 'Archipel'"
    />

    <p>À Montreuil, le site Arborial, offre des espaces de formation modernes, spacieux et adaptés pour la formation continue, et la formation des publics spécialisés.</p>

    <ImageViolet
    :img="Arborial"
    alt="Photo du second site Parisien, Arborial"
    />
           
    </section>
    <EtMaintenant 
    BgColor="bg-marron"
    />
  </div>
</template>

<script setup>
import BulletFleche from '@/components/BulletFleche.vue';
import EncartViolet from '@/components/EncartViolet.vue';
import ImageViolet from '@/components/ImageViolet.vue';
import TimeLine from '@/components/TimeLine.vue';
import Salle from '@/assets/Images/banner/Salle-des-pas-perdus2.webp'
import Paris from '@/assets/Images/generales/ENM-Paris.webp'
import Archipel from '@/assets/Images/generales/Site_Archipel_V2.webp'
import Arborial from '@/assets/Images/generales/Arborial.webp'
import EtMaintenant from '@/components/EtMaintenant.vue';
import Etape1 from '@/assets/Images/generales/etape 7.1.webp';
import Etape2 from '@/assets/Images/generales/etape 7.3.webp';
import Etape3 from '@/assets/Images/generales/etape 7.4.webp';
import Etape4 from '@/assets/Images/generales/etape 7.5.webp';

const timeline = [
  { titre: '1958', description: 'L’École nationale de la magistrature (ENM), créée en 1958 sous le nom de Centre national d’études judiciaires, répond à la volonté de professionnaliser et d’uniformiser la formation des juges et procureurs pour garantir une justice indépendante et de qualité. ' },
  { titre: '1960', description: 'Après une année expérimentale à Paris, le Centre est transféré à Bordeaux en 1960, grâce à l’implication de Jacques Chaban-Delmas, alors maire de la ville et président de l’Assemblée nationale. ' },
  { titre: '1972', description: 'D’abord installée cours Xavier Arnozan, l’École prend le nom d’École nationale de la magistrature en 1972 et s’établit définitivement sur le site du fort du Hâ, près du Palais de Justice.' },
]

const listImages = [
  {img: Etape1, alt: 'Photo du salle des pas perdu (hall) avec les premiers auditeurs de justice'},
  {img: Etape2, alt: 'Photo du salle des pas perdu (hall)'},
  {img: Etape3, alt: 'Photo du salle des pas perdu (hall)'},
  {img: Etape4, alt: 'Photo du salle des pas perdu (hall) en couleur'},
]
</script>