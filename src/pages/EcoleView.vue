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
                <ul class="mt-4">
                    <BulletFleche>Nos missions</BulletFleche>
                    <BulletFleche>Nos engagements</BulletFleche>
                    <BulletFleche>Notre vision pour une justice moderne et accessible</BulletFleche>
                </ul>
                <ImageViolet
                :img="VideoInstit"
                alt="Couverture de la vidéo institutionnelle"
                link="https://www.youtube.com/watch?v=6uGzwPzRWLA"
                />
            <h2>Plongez dans l’émotion de la prestation de serment des élèves magistrats de la <span class="text-rouge-1">Promotion État de Droit</span> 
de l’ENM&nbsp;!</h2>
                <p>Cet aftermovie immortalise les moments les plus forts de cette journée d’importance pour l’institution judiciaire.</p>
                <ImageViolet
                :img="Aftermovie"
                alt="Couverture de la vidéo 'aftermovie' de la prestation de serment"
                link="https://www.youtube.com/watch?v=HtS4qBiiKfs"
                />

                <h2>Concours ENM 2023</h2>
                <ImageViolet
                :img="Concours"
                alt="Couverture de la vidéo du concours de l'ENM 2023"
                link="https://www.youtube.com/watch?v=r3GXTnI1SeA"
                />

                <h2><span class="text-rouge-1 font-MtItalic">#60ansENM</span> démolition du fort du Hâ en 1970</h2>
                <ImageViolet
                :img="Demolition"
                alt="Couverture de la vidéo de la démolition du fort du Hâ"
                link="https://www.youtube.com/watch?v=vl3uNIWT-8M&list=PLHYxtHkJ2VAGJOFReMDW_Ro2f5vx8TV0f&index=22"
                />

                <h2><span class="text-rouge-1 font-MtItalic">#60ansENM</span> 1968, une grande école installée au cœur de la cité bordelaise</h2>
                <ImageViolet
                :img="GrandeEcole"
                alt="Couverture de la vidéo d'une grande école Bordelaise"
                link="https://www.youtube.com/watch?v=VaRUA2zyIgA&list=PLHYxtHkJ2VAGJOFReMDW_Ro2f5vx8TV0f&index=21"
                />

                <EncartRouge>
                    <p class="font-MtItalic">Si vous aussi, vous avez envie de devenir magistrat, rendez-vous sur le site internet de l’ENM pour en savoir plus.</p>
                    <Bouton class="flex justify-center text-center"
                    label="En savoir plus sur le métier de magistrat"
                    href="https://www.enm.justice.fr/concours/les-concours/se-reperer"
                    />
                </EncartRouge>
    </section>
      
  </div>
</template>

<script setup>
import Bouton from '@/components/BoutonRouge.vue';
import BulletFleche from '@/components/BulletFleche.vue';
import EncartRouge from '@/components/EncartRouge.vue';
import ImageViolet from '@/components/ImageViolet.vue';
import ParallaxHeader from '@/components/ParallaxHeader.vue';
import Ecole from '@/assets/Images/banner/Lecole.webp'
import Concours from '@/assets/Images/Youtube/Concours_2023.webp'
import Aftermovie from '@/assets/Images/Youtube/Aftermovie.webp'
import VideoInstit from '@/assets/Images/Youtube/Vidéo_Instit.webp'
import GrandeEcole from '@/assets/Images/Youtube/Une_grande_ecole.webp'
import Demolition from '@/assets/Images/Youtube/Demolition_Ha.webp'



</script>