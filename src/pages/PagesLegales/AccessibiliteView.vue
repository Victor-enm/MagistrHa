<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Banner"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Accessibilité</h1>
        <p>L'application Magistr'Hâ est développé selon les recommandations du référentiel général d’amélioration de l’accessibilité (RGAA) pour être accessible à tous les usagers quel que soit le matériel ou le logiciel utilisé pour naviguer sur internet.
<br>
Cette déclaration d’accessibilité s’applique au site visite-magistrah.enm.justice.fr</p>
<p>Nous nous efforçons de concevoir, développer et maintenir l'application en respectant les normes d'accessibilité. À cette fin, des tests automatisés ont été réalisés à l'aide de l'outil Lighthouse.</p>
<p>Cependant, l'École Nationale de la Magistrature n'a pas encore réalisé d'audit de conformité complet. L'accessibilité est un processus continu, et nous nous engageons à poursuivre nos efforts pour améliorer l'application.

</p>


        <h2>Défenseur des droits</h2>
        <p>Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse rapide de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.</p>
        <p>Plusieurs moyens sont à votre disposition :</p>
        <ul>
          <BulletFleche>un <a href="https://www.defenseurdesdroits.fr/nous-contacter-355" target="_blank" class="underline">formulaire de contact</a></BulletFleche>
          <BulletFleche>la <a href="https://www.defenseurdesdroits.fr/carte-des-delegues" target="_blank" class="underline">liste des délégués près de chez vous</a> avec leurs informations de contact directs</BulletFleche>
          <BulletFleche>un numéro de téléphone : le 09 69 39 00 00 du lundi au vendredi de 8h00 à 20h00 (coût d’un appel local)</BulletFleche>
          <BulletFleche>une adresse postale dans <a href="https://lannuaire.service-public.fr/autorites-independantes/autorite-administrative-independante_195381" target="_blank" class="underline">l’annuaire de l’administration</a></BulletFleche>
        </ul>

    </section>
      
  </div>
</template>

<script setup>
import BulletFleche from '@/components/BulletFleche.vue';
import Banner from '@/assets/Images/banner/Accueil&APropos.webp'





</script>