<template>
  <div id="map-container">
    <img src="../assets/Plan_ENM_Bordeauxv2.png" alt="Plan" id="map-image" />
    <!-- Points -->
    <div
      class="point"
      style="top: 55%; left: 25%;"
      @click="showInfo('Point 1', 'Infos sur le point 1', '/point1', $event)"
    ></div>
    <div
      class="point"
      style="top: 45%; left: 50%;"
      @click="showInfo('Point 2', 'Infos sur le point 2', '/point2', $event)"
    ></div>
    <div
      class="point"
      style="top: 35%; left: 50%;"
      @click="showInfo('Point 3', 'Infos sur le point 3', '/point3', $event)"
    ></div>
    <!-- Info Bulle -->
    <div v-if="popup.visible" id="popup" :style="popup.style">
      <strong>{{ popup.title }}</strong>
      <p>{{ popup.info }}</p>
      <a :href="popup.link">Voir plus</a>
      <button @click="closePopup">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: {
        visible: false,
        title: "",
        info: "",
        link: "",
        style: {},
      },
    };
  },
  methods: {
    showInfo(title, info, link, event) {
      const mapContainer = event.currentTarget.parentElement; // Le conteneur principal
      const mapRect = mapContainer.getBoundingClientRect(); // Dimensions du conteneur

      // Calcul de la position relative à la carte
      const relativeX = event.clientX - mapRect.left;
      const relativeY = event.clientY - mapRect.top;

      // Décalage pour ajuster la position de la popup
      const popupOffset = { x: 20, y: -60 };

      this.popup = {
        visible: true,
        title,
        info,
        link,
        style: {
          top: relativeY + popupOffset.y + "px",
          left: relativeX + popupOffset.x + "px",
        },
      };
    },
    closePopup() {
      this.popup.visible = false;
    },
  },
};
</script>

<style scoped>
#map-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

#map-image {
  width: 100%;
  display: block;
}

.point {
  position: absolute;
  width: 20px; /* Taille de l'image du point */
  height: 20px;
  background-image: url("../assets/pastille.png"); /* Chemin vers l'image du point */
  background-size: cover;
  background-position: center;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

#popup {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#popup strong {
  display: block;
  margin-bottom: 5px;
}

#popup p {
  margin: 0;
  font-size: 14px;
}

#popup button {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#popup button:hover {
  background: darkred;
}
</style>
