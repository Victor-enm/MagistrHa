<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      imageUrl="@/assets/Images/banner/ParcoursDeVisite.webp"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Le parcours de visite</h1>
        <p>Découvrez en un clin d’œil les grandes étapes abordés dans cette visite.</p>
        <h2 class="mb-4">L’Ecole de formation des juges et des procureurs</h2>
         <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours1" :key="'a'+i" :title="item.title" :position="item.position" :img="item.img"  :alt="item.alt" :link="item.link"/>
    </ScrollHorizontal>

    <h2 class="mb-4">Architecture et patrimoine – Entre modernité et vestiges du passé</h2>
    <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours2" :key="'a'+i" :title="item.title" :position="item.position" :img="item.img"  :alt="item.alt" :link="item.link"/>
    </ScrollHorizontal>

    <h2 class="mb-4">Une formation pour une justice au cœur des attentes de la société</h2>
    <ScrollHorizontal>
      <CardParcours v-for="(item, i) in cardsParcours3" :key="'a'+i" :title="item.title" :position="item.position" :img="item.img"  :alt="item.alt" :link="item.link"/>
    </ScrollHorizontal>
    </section>
      
  </div>
</template>

<script setup>
const cardsParcours1 = [
  { title: 'Plongez au cœur de l’histoire et de la justice bordelaise !', position: 'Entrée de l’École', img: 'src/assets/Images/banner/EntreeDeLecole.webp', alt: 'Entrée de l ecole nationale de la magistrature', link:'/qr/entree-de-l-ecole'},
]

const cardsParcours2 = [
  { title: 'L’installation de l’ENM à Bordeaux. La fin d’une prison vétuste', position: 'Le bassin', img: 'src/assets/Images/banner/Bassin.webp', alt: 'Bassin dans la cours de l ENM', link:'/qr/bassin'},
  { title: 'Le fort du Hâ, lieu de la réression durant l’Occupation à Bordeaux', position: 'Monument aux morts', img: 'src/assets/Images/banner/Monument-aux-morts.webp', alt: 'Monument aux morts dans la cours de l ENM', link:'/qr/monument-aux-morts'},
  { title: 'Une tour médiévale au cœur de Bordeaux', position: 'Tour des minimes', img: 'src/assets/Images/banner/Minimes.webp', alt: 'La tour des minimes', link:'/qr/tour-des-minimes'},
  { title: 'Le fort du Hâ, témoin de l’histoire bordelaise', position: 'Tour des sorcières', img: 'src/assets/Images/banner/Sorciere.webp', alt: 'La tour des sorcieres', link:'/qr/tour-des-sorcieres'},
]

const cardsParcours3 = [
  { title: 'Amphithéâtre Simone Veil : L’héritage d’une femme d’exception au cœur de la formation', position: 'Amphithéâtre Simone Veil', img: 'src/assets/Images/banner/Amphi.webp', alt: 'Amphiteatre simone veille pendant un cours magistrale', link:'/qr/amphitheatre'},
  { title: 'La salle des pas perdus : un lieu de rencontres, d’échanges et de débats', position: 'Salle des pas perdus', img: 'src/assets/Images/banner/Salle-des-pas-perdus.webp', alt: 'Salle des pas perdus qui se situe dans le hall', link:'/qr/salle-des-pas-perdus'},
]


</script>