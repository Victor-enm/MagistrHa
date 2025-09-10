<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Ecole"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Qui sommes nous&nbsp;?</h1>
        <p>Par ses missions, l’École nationale de la magistrature joue un rôle de trait d’union entre savoir-faire et savoir-être, entre les magistrats et les acteurs de la justice et du droit, entre la pratique de la justice et la compréhension de la société. Créée en 1958, l’ENM est l’unique école de formation des magistrats de l’ordre judiciaire (juges et procureurs). </p>

        <p>Elle assure le recrutement et la formation initiale des élèves magistrats. Elle forme les magistrats français au titre de la formation continue et des magistrats d’États étrangers. Par ailleurs, l’École assure la formation d’autres publics qui exercent des fonctions juridictionnelles ou qui concourent à l’activité judiciaire. </p>

        <p>Nos cinq grandes missions&nbsp;:</p>
        <ul>
          <BulletFleche>L’organisation des concours pour recruter les futurs magistrats, la formation initiale et la formation continue des magistrats de l’ordre judiciaire français.</BulletFleche>
          <BulletFleche class="mt-2">La formation de personnes n’appartenant pas au corps judiciaire et amenées à exercer des fonctions juridictionnelles dans l’ordre judiciaire ou à concourir étroitement à l’activité judiciaire. </BulletFleche>
          <BulletFleche class="mt-2">La formation initiale et la formation continue des magistrats et futurs magistrats d’États étrangers. </BulletFleche>
          <BulletFleche class="mt-2">La coopération européenne et internationale, notamment par la diffusion des connaissances juridiques et judiciaires et par le développement de systèmes judiciaires étrangers. </BulletFleche>
          <BulletFleche class="mt-2">La recherche, notamment dans le domaine des pratiques judiciaires comparées. </BulletFleche>
        </ul>
        <p>Notre gouvernance La directrice de l’ENM a été nommée le 21 septembre 2020 et reconduite dans ses fonctions le 4 octobre 2023 par décret du Président de la République pris sur le rapport du garde des Sceaux, ministre de la Justice. Nathalie Roret, avocate, est la première femme et non-magistrate à diriger l’École. La gouvernance est assurée de manière collégiale par un comité de direction composé de magistrats détachés et de professionnels non issus du monde judiciaire. La directrice organise les missions de l’École dans le cadre du mandat qui lui est confié par le conseil d’administration de l’établissement, dont le président et le vice-président sont respectivement le premier président de la Cour de cassation, Christophe Soulard, et le procureur général près ladite Cour, Rémy Heitz.</p>
    </section>

    <div style="box-shadow: 6px 6px 0 #CAC7FD;" class="overflow-hidden border border-violet-3 rounded-xl mr-5 ml-5 mb-6">
    <div class="relative w-full overflow-hidden">
        <img 
        :src='Direction'
        alt='Photo officielle de Nathalie Roret'
        loading="lazy"
        class="object-cover h-auto w-full"
        />
    </div>
    <div class="mt-3">
        <div class="flex items-center gap-1 whitespace-normal">
            <Fleche class="w-7.5 h-7.5 shrink-0 self-start" role="presentation" aria-hidden="true"/>
            <p class="mt-0 block min-w-0 w-full break-words leading-snug flex-1 font-MtItalic text-base mb-2">Nathalie Roret<br>Directrice de l'ENM</p>
        </div>
    </div>
    </div>
    
      
  </div>
</template>

<script setup>
import Direction from '@/assets/Images/generales/Nathalie_Roret.webp';
import ParallaxHeader from '@/components/ParallaxHeader.vue';
import Ecole from '@/assets/Images/banner/Lecole.webp'
import BulletFleche from '@/components/BulletFleche.vue';
import Fleche from '@/assets/icons/Fleche.svg'



</script>