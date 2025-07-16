<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Entree"
      imageAlt="vue aérienne de l'entrée de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <Situation
        position="Entrée de l'école"
        etape="01/07"
        />
        <h1>Plongez au cœur de l’histoire et de la justice bordelaise !</h1>
            <p>Saviez-vous qu’au sein des vestiges du fort du Hâ, en plein centre de Bordeaux, se trouve une institution unique en France ? Depuis 1958, l’École nationale de la magistrature, grande École de la République, forme l’ensemble des juges et procureurs français dans ce lieu chargé d’histoire.</p>
            <h2>1456</h2>
            <p>L’histoire du site débute au XVe siècle : c’est en 1456, sur ordre du roi Charles VII, que commence la construction du fort du Hâ, une imposante forteresse destinée à défendre la ville après la fin de la guerre de Cent Ans. </p>
            <ImageViolet
            :img="Fort"
            alt="Fort du Hâ en 1456"
            />
            <p>Au fil des siècles, le fort se transforme : palais ducal, prison, tribunal, puis enfin école nationale. Aujourd’hui, il incarne l’alliance de l’excellence et de la pédagogie, du patrimoine et de l’architecture contemporaine, unissant l’histoire et la modernité au service de la justice française.</p>
    </section>
    <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc">
        <h2>Un site emblématique devenu un symbole de justice</h2>
        <p>Aujourd’hui, les vestiges du fort du Hâ s’intègrent dans un ensemble architectural audacieux où coexistent trois institutions majeures de la justice bordelaise :</p>
        <div class="py-6"><TimeLine
      v-for="(item, index) in timeline"
      :key="index"
      :titre="item.titre"
      :description="item.description"
      :img="item.img"
      :alt="item.alt"
    /></div>

    <EncartViolet>
        <p>L’origine du fort du Hâ provient du gascon «&nbsp;Far&nbsp;» (qui signifie Phare ou Guet). Le nom a dérivé pour une raison de prononciation puisque le «&nbsp;f&nbsp;» à l’époque se disait «&nbsp;h&nbsp;» et le «&nbsp;r&nbsp;» était souvent aspiré. Par usage et habitude, on oublia le Château du Far pour le Château du Hâ.&nbsp;»</p>
    </EncartViolet>
    <p class="mt-4">La présence de ces trois institutions sur un même site illustre l’évolution de la justice à Bordeaux, mais aussi les valeurs fondamentales qu’elle incarne : l’autorité, la pédagogie et la transparence.</p>
    <EncartViolet>
        Sur le parvis de l’ENM et du Tribunal Judiciaire, les 17 articles de la Déclaration des droits de l’Homme et du citoyen de 1789 sont gravés au sol sur des plaques métalliques, rappelant les principes essentiels de justice et de liberté. Depuis le 8 avril 2022, ce parvis porte temporairement le nom de « Place de l’Ukraine », en hommage au peuple ukrainien.&nbsp;»
    </EncartViolet>
</section>
<section class="content -mt-5 bg-blanc py-8 px-5 z-10 relative border border-blanc rounded-3xl">
  <h2>Réservez votre visite dès maintenant !</h2>
  <p class="mb-2">L’Office du Tourisme de Bordeaux vous invite à découvrir ce pôle judiciaire lors d’une visite guidée immersive. Explorez la Cour d'appel, le tribunal Judiciaire, et l'ENM, et plongez dans l’histoire fascinante de la justice bordelaise.</p>
  <BulletFleche>Accès exceptionnel à l’ENM, au Tribunal Judiciaire et à la Cour d’appel</BulletFleche>
  <BulletFleche>Visite guidée historique et architecturale</BulletFleche>
  <BulletFleche>Parcours insolite au cœur du patrimoine judiciaire</BulletFleche>

  <p>Un voyage unique à travers l’histoire, l’architecture et les valeurs de la justice vous attend au cœur de Bordeaux.</p>
  <Bouton
        label="Visiter le pôle judiciaire de Bordeaux"
        href="https://www.visiter-bordeaux.com/fr/visites-sur-demande/bordeaux-pole-judiciaire.html"
      />
      <p>Vous pouvez également découvrir l’ENM lors des Journées Européennes du patrimoine. </p>
      <p>Pour les scolaires de la région Nouvelle-Aquitaine, vous pouvez convenir d’une rencontre à l’ENM pour une explication du mode de recrutement et de formation des juges et procureurs de la République français en contactant l’ENM à l’adresse suivante : <a href="mailto:com.enm@justice.fr" class="underline text-rouge-1">com.enm@justice.fr</a></p>
</section>
      
  </div>
</template>

<script setup>
import BulletFleche from '@/components/BulletFleche.vue';
import EncartViolet from '@/components/EncartViolet.vue';
import TimeLine from '@/components/TimeLine.vue';
import Entree from '@/assets/Images/banner/EntreeDeLecole.webp';
import Tribunal from '@/assets/Images/generales/Tribunal.webp';
import Fort from '@/assets/Images/generales/Fort-1456.webp';

const timeline = [
  { titre: 'Milieu du XIXᵉ siècle', description: 'La cour d’appel de Bordeaux, installée dans un palais de justice néoclassique conçu par Joseph-Adolphe Thiac ' },
  { titre: '1972', description: 'l’École nationale de la magistrature (ENM), imaginée par l’architecte Guillaume Gillet, Grand Prix de Rome, et inaugurée le 12 décembre 1972 ' },
  { titre: '1998', description: 'Le Tribunal Judiciaire inauguré en 1998, œuvre contemporaine de Lord Richard Rogers, célèbre pour sa participation à la construction du Centre Pompidou à Paris.', img: Tribunal },
]
</script>