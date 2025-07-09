<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      imageUrl="/src/assets/Images/banner/Amphi.webp"
      imageAlt="vue de l'intérieur de lAmphithéâtre Simone Veil pendant un cours"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl shadow-lg inset-shadow-sm" >
        <Situation
        position="Amphithéâtre Simone Veil"
        etape="06/07"
        />
        <h1>Amphithéâtre Simone Veil : L'Héritage d'une femme d'exception au cœur de la formation</h1>
            <p>Intégrer l’ENM, c’est s’engager dans une formation exigeante, enrichie de fortes expériences humaines. Les formations, initiales ou continues, sont conçues de façon transversale pour développer et renforcer les compétences des magistrats, quelle que soit leur fonction. La pédagogie privilégie d’abord les savoirs communs, permettant d’apprendre à être magistrat avant de se spécialiser.</p>
            <p>L’enseignement combine divers formats complémentaires qui apprennent à maîtriser l’application de la loi : </p>
            <BulletFleche>Cours en petits groupes sur de vrais dossiers</BulletFleche>
            <BulletFleche>Tables rondes</BulletFleche>
            <BulletFleche>Simulations</BulletFleche>
            <BulletFleche>Conférences en amphitéâtre</BulletFleche>

            <p>En plus des enseignements assurés par une cinquantaine de magistrats et de professionnels (avocats, greffier, universitaire), l’ENM accueille chaque année plus de 750 intervenants extérieurs :</p>
            <BulletFleche>Expert en droit</BulletFleche>
            <BulletFleche>Histoire, sociologie</BulletFleche>
            <BulletFleche>Psychologie</BulletFleche>
            <BulletFleche>Médecine légale</BulletFleche>
            <BulletFleche>Criminologie</BulletFleche>

            <p>Les élèves alternent également avec de nombreuses périodes de stages (70 % de la formation totale) en cabinets d’avocats, services d’enquête ou juridictions.</p>
            <p>L’ENM accompagne également plus de 9 000 magistrats en exercice via la formation continue, leur permettant de renforcer leurs compétences et de se spécialiser tout au long de leur carrière.</p>
            <p>Près de 2 600 magistrats et professionnels, issus des secteurs public et privé, interviennent dans plus de 600 sessions, colloques, conférences et stages, organisés à Paris et en région via la formation continue déconcentrée dans les cours d’appel.</p>
            <p>Depuis sa création l’ENM s’est ouverte à l’international pour moderniser la formation des magistrats à travers le monde. </p>
    </section>
    <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc" style="box-shadow: 0px -4px 16px 4px rgba(117, 117, 117, 0.10);">
      <h2>Une école qui rayonne</h2>
      <p>Dès 1960, elle accueille des auditeurs de justice étrangers, affirmant sa vocation d’établissement ouvert, favorisant les échanges et contribuant au rayonnement du modèle français. Elle soutient ainsi le développement institutionnel de pays partenaires et le renforcement de l’État de droit à l’international.</p>
      <p>Enfin, l’ENM forme aussi de nombreux autres professionnels exerçant des fonctions juridictionnelles mais aussi les membres de l’équipe juridictionnelle et collaborateurs de la justice</p>

      <Bouton
      label="Consulter nos formations"
      href="#"
      />
    </section>
    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl shadow-lg inset-shadow-xl">
      
      <CardPersonnage
      nom="Simone Veil, 1927 - 2017"
      img="/src/assets/Images/Portraits/Simone Veil.webp"
      alt="Photo de Simone Veil"
      />
      <p>Déportée à 16 ans à Auschwitz-Birkenau, Simone Veil survit aux camps de concentration avant de réussir le concours de la magistrature en 1956.</p>
      <p>Elle entame alors une brillante carrière de haut fonctionnaire, marquée par son engagement : inspectrice de l’administration pénitentiaire, elle lutte pour améliorer les conditions de vie des détenues en France et en Algérie.</p>

      <h2>1974</h2>
      <p>En 1974, nommée ministre de la Santé, elle fait adopter la loi Veil, qui dépénalise l’interruption volontaire de grossesse (IVG).</p>
      <p>Première présidente du Parlement européen élue au suffrage universel (1979-1982), Simone Veil devient une figure majeure de la réconciliation franco-allemande et de la construction européenne.</p>
      <p>Elle siège au Conseil constitutionnel de 1998 à 2007, puis se retire progressivement de la vie politique. En 2007, elle publie son autobiographie, "Une vie", et est élue à l’Académie française l’année suivante.</p>
      <p>Décédée en 2017, elle entre au Panthéon avec son époux le 1<sup>er</sup> juillet 2018.</p>
    </section>
  </div>
</template>

<script setup>
import CardPersonnage from '../../components/CardPersonnage.vue';
import EncartGris from '../../components/EncartGris.vue';
import EncartViolet from '../../components/EncartViolet.vue';
import ImageViolet from '../../components/ImageViolet.vue';
import TourDesAnglais from '../../assets/Images/Illustrations/TourDesAnglais.svg'
import TourDesMinimes from '../../assets/Images/Illustrations/TourDesMinimes.svg'
import BassinMinimes from '../../assets/Images/Illustrations/Bassin+Minimes.svg'
import BulletFleche from '../../components/BulletFleche.vue';
import Bouton from '../../components/bouton.vue';


const cardsPersonnage1 = [
  { nom: 'François-Armand de Saige 1734 - 1793', img: '/src/assets/Images/Portraits/François-Armand_de_Saige.webp', alt: 'Photo ou illustration de François-Armand de Saige'},
  { nom: 'Raymond de Sèze, 1748 - 1828', img: '/src/assets/Images/Portraits/Raymond-de-Seze.webp', alt: 'Photo ou illustration de Raymond de Sèze'},
]

const cardsPersonnage2 = [
  { nom: 'Édouard Daladier, 1884 - 1970', img: '/src/assets/Images/Portraits/Édouard_Daladier.webp', alt: 'Photo ou illustration de Édouard Daladier'},
  { nom: 'Georges Mandel, 1885 - 1944', img: '/src/assets/Images/Portraits/Georges Mandel.webp', alt: 'Photo ou illustration de Georges Mandel'},
  { nom: 'Prince Louis Napoléon Bonaparte 1856 - 1879', img: '/src/assets/Images/Portraits/', alt: 'Photo ou illustration de Louis Napoléon Bonaparte'},
]
</script>