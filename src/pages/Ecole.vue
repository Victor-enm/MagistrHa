<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Ecole"
      imageAlt="vue aérienne de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <h1>Une grande École de la République</h1>
            <h2>L’ENM comme vous ne l’avez jamais vue ! </h2>
                <p>Découvrez en images&nbsp;:</p>
                <ul>
                    <BulletFleche>Nos missions</BulletFleche>
                    <BulletFleche>Nos engagements</BulletFleche>
                    <BulletFleche>Notre vision pour une justice moderne et accessible</BulletFleche>
                </ul>
                <ImageViolet
                img="/src/assets/Images/banner/Amphi.webp"
                />
            <h2>Plongez dans l’émotion de la prestation de serment des élèves magistrats de la <span class="text-rouge-1">Promotion État de Droit</span> 
de l’ENM !</h2>
                <p>Cet aftermovie immortalise les moments les plus forts de cette journée d’importance pour l’institution judiciaire.</p>
                <ImageViolet
                img="/src/assets/Images/banner/Amphi.webp"
                link="https://www.youtube.com"
                />

                <h2>Concours ENM 2023</h2>
                <ImageViolet
                img="/src/assets/Images/banner/Amphi.webp"
                link="https://www.youtube.com"
                />

                <h2><span class="text-rouge-1 font-MtItalic">#60ansENM</span> démolition du fort du Hâ en 1970</h2>
                <ImageViolet
                img="/src/assets/Images/banner/Amphi.webp"
                link="https://www.youtube.com"
                />

                <h2><span class="text-rouge-1 font-MtItalic">#60ansENM</span> 1968, une grande école installée au cœur de la cité bordelaisev</h2>
                <ImageViolet
                img="/src/assets/Images/banner/Amphi.webp"
                link="https://www.youtube.com"
                />

                <EncartRouge>
                    <p class="font-MtItalic">Si vous aussi, vous avez envie de devenir magistrat, rendez-vous sur le site internet de l’ENM pour en savoir plus.</p>
                    <Bouton
                    label="Commencer votre visite"
                    href="https://www.enm.justice.fr"
                    />
                </EncartRouge>
    </section>
      
  </div>
</template>

<script setup>
import Bouton from '../components/bouton.vue';
import BulletFleche from '../components/BulletFleche.vue';
import EncartRouge from '../components/EncartRouge.vue';
import ImageViolet from '../components/ImageViolet.vue';
import ParallaxHeader from '../components/ParallaxHeader.vue';
import Ecole from '@/assets/Images/banner/Lecole.webp'



</script>