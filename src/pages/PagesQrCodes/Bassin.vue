<template>
  <div class="relative min-h-screen">
     <ParallaxHeader
      :imageUrl="Bassin"
      imageAlt="vue sur le bassin au centre de la cour de l'ENM"
      height="30vh"
    />

    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl shadow-lg inset-shadow-sm" >
        <Situation
        position="Le bassin"
        etape="05/07"
        />
        <h1>L’installation de l’ENM à Bordeaux. La fin d’une prison vétuste</h1>
            <p>Dans les années 1960, la politique pénitentiaire vise à éloigner les maisons d’arrêt des centres-villes au profit de nouveaux établissements en périphérie. </p>
            <p>Bordeaux suit cette tendance&nbsp;: en juin 1967, les détenus du fort du Hâ sont transférés à la nouvelle prison de Gradignan, marquant la fin de la prison de Thiac, jugée vétuste et surpeuplée. </p>
            <p>Sur cet espace libéré, l’État décide d’implanter le Centre national d’études judiciaires, qui deviendra l’École nationale de la magistrature (ENM) en 1972.</p>
            <h2>Le projet de Guillaume Gillet</h2>
            <p>En 1960 le projet est confié à un architecte français «&nbsp;au service de la justice&nbsp;», le titulaire du Prix de Rome en 1946, architecte conseil du ministère de la Justice depuis 1954 : Guillaume Gillet.</p>

            <CardPersonnage
            nom="Guillaume Gillet, 1912 - 1987"
            :img="Gillet"
            alt="Photo de l'architecte Guillaume Gillet"
            class="mt-4"
            />

            <p>Après plusieurs avant-projets, il conçoit un projet qualifié de «&nbsp;parti architectural&nbsp;», traduction moderne d’une architecture parlante et symbolique sur plus de 3 500 m². </p>
    </section>
    <section class="content bg-marron -mt-4 pb-15 pt-12 py-8 px-5 z-5 relative border border-blanc" style="box-shadow: 0px -4px 16px 4px rgba(117, 117, 117, 0.10);">
      <h2>L’implantation à Bordeaux, un choix politique</h2>
      <p>Gillet intègre les nouveaux espaces à l’histoire du site, conservant les deux tours du fort, et privilégie des salles adaptées à l’enseignement en petits groupes, un amphithéâtre de 300 places et une salle de simulation d’audiences.</p>
      <p>Entretemps, l’ENM fut officiellement inaugurée le 12 décembre 1972 en présence du garde des Sceaux René Pleven, du maire de Bordeaux Jacques Chaban-Delmas.</p>

      <h2>Une architecture de style “V<sup>e</sup> République”</h2>
      <p>Les travaux de construction débutent en 1971 et sont conduits avec une rapidité étonnante. En juillet 1972, le gros œuvre de béton armé des deux ailes, les piliers, la corniche de la salle des pas perdus et la charpente sont achevés. L’aménagement intérieur est réalisé entre septembre 1972 et le début de l’année 1973. </p>
      <p> Au cœur de l’École, une vaste salle des pas perdus permet la liaison entre les différentes parties du bâtiment ; à l’instar de celles des palais de justice elle est un lieu de rencontres, de débats, de discussion et de déambulation de «&nbsp;l’académie socratique&nbsp;» définie par Gillet. </p>

      <ImageViolet 
      :img="Salle"
      alt="Vue de l'intérieur de l'ENM donnant sur le hall et la salle des pas perdus"
      />

      <p>Baignée par la lumière du nord-ouest qui entre généreusement par la façade vitrée de la cour, la salle des pas perdus entoure et embrasse la tour des Minimes qui devient le point de mire, tenant la même position que le juge dans un tribunal, qui occupe, selon Robert Badinter&nbsp;:</p>

      <EncartVert>
        <p class="font-MtItalic text-xl mt-0">“Une position centrale autour de laquelle tout s’ordonne, comme le débat judiciaire qu’il conduit”</p>
      </EncartVert>
      <p>La tour est ainsi le centre à la fois physique et symbolique de l’ENM.</p>
    </section>
    <section class="content bg-blanc -mt-5 py-8 px-5 z-10 relative border border-blanc rounded-3xl shadow-lg inset-shadow-xl">
      <h2>Agrandissements et extensions ultérieurs</h2>
      <p>Prévue initialement pour 100 auditeurs de justice, l’ENM devient rapidement trop exiguë. En parallèle de la construction du nouveau palais de justice, des travaux d’extension et de modernisation sont réalisés entre 1994 et 1996 par l’architecte Richard Rogers, connu pour avoir coréalisé le centre Pompidou à Paris. </p>
      <CardPersonnage
      nom="Richard Rogers, 1933 - 2021"
      :img="Richard"
      alt="Richard Rogers"
      class="mt-4"
      />
      <EncartViolet>
        <p>Le souhait de l’architecte était que le bâtiment soit tout en courbes, voutes, rondeurs et circularité&nbsp;: la justice n’est-elle pas là pour «&nbsp;arrondir les angles ?&nbsp;».</p>
        <p>Ainsi le toit qui couvre la salle des pas perdus décrit une forme arrondie, il se soulève en son milieu puis se rabaisse et se soulève de nouveau à ses extrémités, formant des ondulations qui apaisent le regard.</p>
      </EncartViolet>
      <p>Rogers s’inscrit dans l’histoire du fort du Hâ, en poursuivant l’intégration d’éléments contemporains par la construction d’une 3e tour de forme carrée (la tour des Minimes est de base circulaire et à la tour des Anglais en forme de fer à cheval) complétant ainsi l’aspect symétrique esquissée par la courbe du bâtiment de Gillet.</p>
      <EncartGris>
        <div class="flex justify-between items-center-safe px-8">
          <TourDesAnglais />
          <TourDesMinimes />
        </div>
      </EncartGris>
      <EncartViolet>
        <p>Le bassin situé au cœur de la cour fait partie intégrante de l’œuvre de l’architecte Gillet de 1972. Possédant une forme de demi-lune, il a exactement la même circonférence que la tour des Minimes. Quand celui-ci est mis en eau, la tour s’y reflète, il peut ainsi être considéré comme le 1er miroir d’eau de la ville de Bordeaux.</p>
        <EncartGris>
          <div class="flex items-center justify-around">
            <BassinMinimes />
          </div>
        </EncartGris>
      </EncartViolet>
    </section>
  </div>
</template>

<script setup>
import CardPersonnage from '@/components/CardPersonnage.vue';
import EncartGris from '@/components/EncartGris.vue';
import EncartViolet from '@/components/EncartViolet.vue';
import ImageViolet from '@/components/ImageViolet.vue';
import TourDesAnglais from '@/assets/Images/Illustrations/TourDesAnglais.svg'
import TourDesMinimes from '@/assets/Images/Illustrations/TourDesMinimes.svg'
import BassinMinimes from '@/assets/Images/Illustrations/Bassin+Minimes.svg'
import Richard from '@/assets/Images/Portraits/Richard_Rogers.webp'
import Bassin from '@/assets/Images/banner/Bassin.webp'
import Gillet from '@/assets/Images/Portraits/Guillaume Gillet.webp'
import Salle from '@/assets/Images/banner/Salle-des-pas-perdus.webp'


</script>