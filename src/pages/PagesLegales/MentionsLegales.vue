<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Banner"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Mentions légales</h1>
        <h2>Éditeur de l’application</h2>
        <p>Nom de l’entité : École Nationale de la Magistrature (ENM)<br>
Adresse : 10 rue des Frères Bonie, 33000 Bordeaux<br>
Téléphone : <a href="05 56 00 10 10">05 56 00 10 10</a><br>
Courriel : <a href="mailto:accueil-bdx.enm@justice.fr">accueil-bdx.enm@justice.fr</a><br><br>

L’ENM est un établissement public administratif placé sous la tutelle du ministère de la Justice.</p>
        <h2>Directeur de la publication</h2>
        <p>Nom : Henri-Pierre Godey<br>Fonction : Chef du service de la communication</p>
        <h2>Hébergement</h2>
        <p>L’application mobile <strong>Magistr'Hâ</strong> est hébergée par la plateforme Netlify.<br>
Le code source de l’application est disponible en open-source sur la plateforme GitHub.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de l'application mobile Magistr'Hâ (textes, images, vidéos, etc.) est la propriété de l'École Nationale de la Magistrature ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, est strictement interdite et constitutive d’une contrefaçon sanctionnée par le Code de la propriété intellectuelle.

</p>

    </section>
      
  </div>
</template>

<script setup>
import Banner from '@/assets/Images/banner/Accueil&APropos.webp'


</script>