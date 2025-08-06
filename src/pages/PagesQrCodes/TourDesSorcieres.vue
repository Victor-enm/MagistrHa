<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Sorciere"
      imageAlt="vue d'ensemble avec la tour des sorcières"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl">
        <Situation
        position="Tour des Sorcières"
        etape="02/07"
        />
        <h1>Le fort du Hâ, témoin de l’histoire bordelaise</h1>
            <p>La construction du fort du Hâ débute le 24 janvier 1456, à la suite de la victoire décisive de Charles VII sur les Anglais lors de la bataille de Castillon, qui met fin à la guerre de Cent Ans et marque le départ définitif des Anglais du duché d’Aquitaine.</p>
            <p>Bordeaux, longtemps favorable à l’Angleterre, est alors reprise par les Français, et le roi Charles VII (dit le Victorieux) ordonne l’édification de deux forteresses pour contrôler la ville et prévenir toute nouvelle attaque extérieure : le château Trompette au nord de la ville (actuelle place des Quinconces) et le fort du Hâ au sud-ouest.</p>
            <CardPersonnage
            nom="Charles VII, 1403 - 1461"
            :img="CharlesVII"
            alt="Illustration de Charles 7"
            class="mt-4"
            />
            <p>Le fort, puissant ouvrage militaire de forme quadrilatère (120 m sur 68 m), abritait un grand donjon symbolisant la présence royale.</p>
            <p>Dès les années 1470, il devient la résidence du duc de Guyenne, Charles de Valois, qui y tient une cour prestigieuse, jusqu’à sa mort en 1472.</p>
            <p>Au fil des siècles, le fort du Hâ a ainsi connu de nombreux usages&nbsp;:</p>
            <BulletFleche class="mt-4">Forteresse militaire</BulletFleche>
            <BulletFleche>Palais Royal</BulletFleche>
            <BulletFleche>Refuge pour les protestants</BulletFleche>
            <BulletFleche>Prison civile puis politique</BulletFleche>
            <p>Et enfin, depuis 1972, unique lieu de formation des juges et procureurs français.&nbsp;</p>
    </section>
    <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc">
      <p>L’enceinte du fort était protégée par deux tours principales, inscrites aux monuments historiques, elles subsistent aujourd’hui et témoignent de cette riche histoire&nbsp;:&nbsp;</p>
      <h2>La tour des Anglais</h2>
        <p>Tournée vers la campagne, est reconnaissable à sa forme élancée, en fer à cheval, ses mâchicoulis et ses arbalétrières. Elle permettait de surveiller d’éventuels retours ennemis.</p>
        
        <ScrollHorizontal>
              <CardImage v-for="(item, i) in listImages" :key="'a'+i" :img="item.img"  :alt="item.alt" />
            </ScrollHorizontal>
           

    <EncartViolet>
        <p>Cette tour est aussi appelée tour des Sorcières, car des femmes accusées de sorcellerie y furent brûlées en 1610, ou tour du Peugue, du nom d’une rivière, une jalle (du gascon qui signifie cour d’eau), aujourd’hui souterraine qui longeait le fort&nbsp;pour se jeter dans la Garonne.</p>
    </EncartViolet>
    <h2>La tour des Minimes</h2>
    <p>Massive et circulaire, était la clé du dispositif défensif, avec deux niveaux d’artillerie couvrant en enfilade les rues adjacentes. Couronnée d'un chemin de ronde avec tourelle, haute de 18m, composée d’embrasures casematées reliées par 2 salles hexagonales voûtées, elle commandait la ville et prévenait toute révolte de la population. </p>
    <ImageViolet
    :img="Minimes"
    alt="Vue de la tour des minimes"
    />
    <p>Remaniée par Gillet dans les années 1970, la tour est encore utilisée aujourd’hui, avec le salon d’honneur au 1er niveau et une salle d’audience pédagogique grandeur nature, l’une des rares en France, au niveau supérieur.</p>
    <EncartViolet>
        <p>Surnommée aussi tour des Poudres, ses murs de 4,5 m d’épaisseur protégeaient le fort en cas d’explosion. Son nom vient de la présence des religieux Minimes dont les bâtiments étaient adossés à l’édifice.</p>
    </EncartViolet>
</section>
<EtMaintenant 
    BgColor="bg-blanc z-15 rounded-3xl"
    />
  </div>
</template>

<script setup>
import BulletFleche from '@/components/BulletFleche.vue';
import CardPersonnage from '@/components/CardPersonnage.vue';
import EncartViolet from '@/components/EncartViolet.vue';
import ImageViolet from '@/components/ImageViolet.vue';
import Sorciere from '@/assets/Images/banner/Sorciere3.webp'
import Minimes from '@/assets/Images/banner/Minimes.webp'
import CharlesVII from '@/assets/Images/Portraits/CharlesVII.webp'
import EtMaintenant from '@/components/EtMaintenant.vue';
import Etape2 from '@/assets/Images/generales/etape 2.1.webp'
import Etape3 from '@/assets/Images/generales/etape 2.2.webp'
import Situation from '@/components/SituationCard.vue'

const listImages = [
  {img: Sorciere, alt: 'Zoom sur la tour des sorcières'},
  {img: Etape2, alt: 'Plan de la tour des sorcières'},
  {img: Etape3, alt: 'Plan de la tour des sorcières avec rempart'},
]
</script>