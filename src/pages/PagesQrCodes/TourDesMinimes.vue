<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Minimes"
      imageAlt="vue sur la tour des Minimes avec le bassin"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <Situation
        position="Tour des Minimes"
        etape="03/07"
        />
        <h1>Une tour médiévale au cœur de Bordeaux</h1>
            <p>Pendant l’Ancien Régime, le fort sert à la fois de résidence aux gouverneurs et de prison. Il incarne l’autorité royale, souvent contestée par les Bordelais, et la répression dont ils sont victimes. Théâtre d’événements dramatiques, le fort, qui accueille principalement les troupes royales, devient rapidement une prison redoutée.</p>
            <p>Au XVIII<sup>e</sup> siècle, l’emprisonnement reste une peine secondaire&nbsp;: les geôles sont surtout un lieu de passage vers la torture ou l’exécution publique. Dès 1790, le Fort du Hâ regroupe&nbsp;:</p>
            <BulletFleche class="mt-2">Maison d’arrêt</BulletFleche>
            <BulletFleche>Maison de Justice</BulletFleche>
            <BulletFleche>Maison de correction</BulletFleche>
            <BulletFleche>Maison de force</BulletFleche>
            <BulletFleche>Prison militaire</BulletFleche>

            <p>Hommes, femmes et enfants y partagent des cachots étroits et insalubres. L’année 1793, marquée par la Terreur, voit 400 prisonniers enfermés au fort, dont François-Armand de Saige, maire de Bordeaux, l’avocat Romain de Sèze, défenseur de Louis XVI, et de nombreux prêtres réfractaires.</p>

            <ScrollHorizontal>
              <CardPersonnage v-for="(item, i) in cardsPersonnage1" :key="'a'+i" :nom="item.nom" :date="item.date" :img="item.img"  :alt="item.alt"/>
            </ScrollHorizontal>
    </section>
    <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc ">
      <h2>La prison de Thiac</h2>
        <p>En 1835, une grande partie très dégradée du fort est rasée : le corps de logis, le grand donjon, les façades, les échauguettes… Seules les deux tours actuelles sont épargnées. </p>
        <p>Sur l’espace libéré, une nouvelle prison conçue par l’architecte Thiac est inaugurée le 19 novembre 1846. Inspirée du modèle «&nbsp;pennsylvanien&nbsp;» américain, elle impose l’isolement total des détenus, censé favoriser la réflexion sur leurs actes. Par extension, on parle aussi «&nbsp;d’architecture panoptique&nbsp;» pour ce type de prison.</p>
         <ScrollHorizontal>
              <CardImage v-for="(item, i) in listImages" :key="'a'+i" :img="item.img"  :alt="item.alt" />
            </ScrollHorizontal>
        <p>Les 150 cellules, réparties autour d’une rotonde chauffée par un unique poêle, étaient prévues pour 230 détenus, mais en accueilleront jusqu’à 560. Innovation notable, un quartier des femmes de 90 cellules, organisé autour d’une cour, est intégré à l’ensemble. </p>
        <p>Les tours des Minimes et des Anglais qui s’intègrent aux nouvelles constructions renforcent le caractère médiéval du site.</p>

    <h2>La prison sous l’occupation et dans l’après-guerre</h2>
    <p>Durant cette période, le fort sert de prison politique pour les résistants et les opposants, dont Édouard Daladier (Président du conseil jusqu’au 20 mars 1940), Georges Mandel (journaliste, homme politique français, résistant assassiné par la Milice en 1944) et le prince Louis Napoléon Bonaparte (prétendant au trône impérial). </p>
    <ScrollHorizontal>
      <CardPersonnage v-for="(item, i) in cardsPersonnage2" :key="'a'+i" :nom="item.nom" :date="item.date" :img="item.img"  :alt="item.alt"/>
    </ScrollHorizontal>
    
    <p>Après la Libération, le fort redevient une prison départementale. Parmi les derniers détenus célèbres figure notamment Marie Besnard, «&nbsp;l’empoisonneuse de Loudun&nbsp;». Les prisonniers sont transférés à Gradignan en juin 1967, et la démolition du site débute fin 1969.</p>
    <EncartViolet>
        <p>Dès 1918, toutes les exécutions capitales bordelaises ont lieu dans la cour du fort du Hâ. Six hommes y sont guillotinés entre 1918 et 1933. René Pons, parricide, y fut le dernier condamné à mort exécuté, le 21 juin 1960.</p>
    </EncartViolet>
</section>
<EtMaintenant 
    BgColor="bg-blanc z-15 rounded-3xl"
    />
  </div>
</template>

<script setup>
import Francois from '@/assets/Images/Portraits/François-Armand_de_Saige.webp'
import Raymond from '@/assets/Images/Portraits/Raymond-de-Seze.webp'
import Edouard from '@/assets/Images/Portraits/Édouard_Daladier.webp'
import George from '@/assets/Images/Portraits/Georges Mandel.webp'
import Minimes from '@/assets/Images/banner/Minimes.webp'
import Prison from '@/assets/Images/generales/Prison.webp'
import BulletFleche from '@/components/BulletFleche.vue'
import CardPersonnage from '@/components/CardPersonnage.vue'
import Napoleon from '@/assets/Images/Portraits/Prince-Louis-Napoleon-Bonaparte.webp'
import EtMaintenant from '@/components/EtMaintenant.vue'
import Etape1 from '@/assets/Images/generales/etape_3.1Carte_postale_la_prison_du_Ha.webp'
import Etape2 from '@/assets/Images/generales/etape 3.2.webp'
import Etape3 from '@/assets/Images/generales/etape 3.3Intérieur_prison_du_Ha.webp'
import Etape4 from '@/assets/Images/generales/etape3.4Vue_aerienne_prison_du_Ha_Cour_appel.webp'
import Etape5 from '@/assets/Images/generales/etape 3.5.webp'



const cardsPersonnage1 = [
  { nom: 'François-Armand de Saige', img: Francois, alt: 'Photo ou illustration de François-Armand de Saige', date: '1734 - 1793'},
  { nom: 'Raymond de Sèze', img: Raymond, alt: 'Photo ou illustration de Raymond de Sèze', date: '1748 - 1828'},
]

const cardsPersonnage2 = [
  { nom: 'Édouard Daladier', img: Edouard, alt: 'Photo ou illustration de Édouard Daladier', date: '1884 - 1970'},
  { nom: 'Georges Mandel', img: George, alt: 'Photo ou illustration de Georges Mandel', date: '1885 - 1944'},
  { nom: 'Prince Louis Napoléon Bonaparte', img: Napoleon, alt: 'Photo ou illustration de Louis Napoléon Bonaparte', date: '1856 - 1879'},
]

const listImages = [
  {img: Prison, alt: 'Photo de la prison'},
  {img: Etape1, alt: 'PCarte postale de la prison du Ha'},
  {img: Etape2, alt: 'Photo de la cours de la prison'},
  {img: Etape3, alt: 'Photo intérieur de la prison'},
  {img: Etape4, alt: 'Vue aérienne de la prison'},
  {img: Etape5, alt: 'Vu exterieur de la prison'},
]
</script>