<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Banner"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Politique de confidentialité</h1>
        <h2>1. Introduction</h2>
        <p>La présente politique de confidentialité a pour objectif de vous informer de la manière dont vos données sont traitées dans le cadre de l’utilisation de l'application mobile Magistr'Hâ.<br><br>

L'application Magistr'Hâ a été conçue pour respecter la vie privée de ses utilisateurs. Elle ne collecte, ne stocke et ne traite aucune donnée personnelle vous concernant.</p>
        
<h2>2. Données non collectées</h2>
<p>L'application Magistr'Hâ ne demande ni ne collecte aucune information personnelle telle que votre nom, adresse e-mail, numéro de téléphone ou position géographique.</p>

<h2>3. Renvois vers des sites externes
</h2>
<p>L'application peut contenir des liens vers des sites web externes (par exemple, YouTube). Lorsque vous cliquez sur ces liens, vous quittez l'application et vous êtes soumis aux politiques de confidentialité de ces sites tiers. Nous vous encourageons à les consulter pour connaître leurs pratiques en matière de traitement des données. L'ENM n'est pas responsable du contenu ni des pratiques de confidentialité de ces sites externes.

</p>

<h2>4. Mesure d'audience avec Matomo
</h2>
<p>Afin d'analyser l'utilisation de l'application et d'améliorer l'expérience utilisateur, l'ENM utilise le service d'analyse d'audience Matomo Cloud.<br>

Cette mesure d'audience est configurée de manière à ne collecter aucune donnée personnelle identifiante. En particulier :<br>

<BulletFleche>Les adresses IP sont anonymisées (partiellement masquées).</BulletFleche>
<BulletFleche>Aucun cookie n'est utilisé pour suivre les utilisateurs.</BulletFleche>
<BulletFleche>Aucune donnée n'est croisée ou reliée à des informations personnelles.</BulletFleche>

L'objectif de cette analyse est purement statistique et ne permet en aucun cas d'identifier les utilisateurs individuellement.</p>
    

    <h2>5. Vos droits</h2>
    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits sur vos données. Cependant, comme l'application Magistr'Hâ ne collecte aucune donnée personnelle, l'exercice de ces droits (droit d'accès, de rectification, d'effacement, etc.) n'est pas applicable.</p>

    <h2>6. Contact</h2>
    <p>Pour toute question concernant cette politique de confidentialité, vous pouvez contacter l'École Nationale de la Magistrature à l'adresse suivante : <a href="mailto:dpo.enm@justice.fr" class="underline">dpo.enm@justice.fr</a>.</p>
  

  </section></div>
</template>

<script setup>
import Banner from '@/assets/Images/banner/Accueil&APropos.webp'




</script>