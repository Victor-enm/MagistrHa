<template><!-- Titre principal -->
<header class="mb-5 text-center">
    <h1>Découvrir le Parcours Historique</h1>
    <p class="lead">
      Explorez l'histoire à travers ce parcours interactif. Scannez les QR codes pour découvrir des récits fascinants et des trésors cachés !
    </p>
  </header>

  <!-- Section de contenu avec images et texte -->
  <section class="content mb-5">
    <h2 class="mb-3">À propos du parcours</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel tincidunt erat, et tincidunt lectus. Integer vitae mauris sed velit fermentum dignissim. Mauris id sapien et velit fermentum faucibus. Nunc non turpis nec eros facilisis consequat.
    </p>
    <div class="row my-4">
      <div class="col-md-4">
        <img
          src="https://picsum.photos/300/200"
          alt="Image fictive 1"
          class="img-fluid rounded mb-3"
        />
      </div>
      <div class="col-md-4">
        <img
          src="https://picsum.photos/300/200?2"
          alt="Image fictive 2"
          class="img-fluid rounded mb-3"
        />
      </div>
      <div class="col-md-4">
        <img
          src="https://picsum.photos/300/200?3"
          alt="Image fictive 3"
          class="img-fluid rounded mb-3"
        />
      </div>
    </div>
    <p>
      Phasellus sit amet mi consequat, pharetra risus nec, auctor libero. Proin in augue ac ligula pellentesque vulputate. Suspendisse ut est ac purus volutpat commodo. Quisque vel tristique sem.
    </p>
    
  </section>

  <!-- Carte interactive -->
  <footer class="mt-5">
    <h2 class="mb-3">Carte Interactive</h2>
    <Map />
  </footer>
</template>

<script>
import Map from "../components/Map.vue"; // Import de la carte interactive

export default {
    name : 'Home',
  components: {
    Map,
  },
};
</script>