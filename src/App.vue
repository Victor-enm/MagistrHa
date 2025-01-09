<template>
  <div class="app-container">
    <header class="header">
      <router-link to="/">
        <img src="/enm_logo.png" alt="Logo" class="logo" />
      </router-link>
    </header>

    <main class="main-content">
      <router-view />
    </main>

     <!-- Menu de navigation en bas -->
     <nav class="bottom-nav">
      <ul class="nav-items">
        <li>
          <router-link to="/map">
            <i class="fa-solid fa-map-location-dot"></i>
            <span>Carte</span>
          </router-link>
        </li>
        <li>
          <router-link to="/qr-codes">
            <i class="fa-solid fa-qrcode"></i>
            <span>QR Codes</span>
          </router-link>
        </li>
        <li>
          <router-link to="/quiz">
            <i class="fa-solid fa-book"></i>
            <span>Histoire</span>
          </router-link>
        </li>
        <li>
          <router-link to="/info">
            <i class="fa-solid fa-circle-info"></i>
            <span>Infos</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

</script>

<style>
/* Structure globale */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Logo en haut */
.header {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  text-align: center;
  padding: 10px 0;
  margin: 0 !important;
}


.logo {
  max-width: 120px; /* Taille du logo */
  height: auto;
}

/* Contenu principal */
.main-content {
  flex: 1;
  margin-top: 60px; /* Hauteur du header */
  margin-bottom: 70px; /* Hauteur du menu en bas */
  overflow-y: auto;
}

/* Menu de navigation en bas */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(10px); 
  background: transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.nav-items {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px; /* Largeur max pour ne pas déborder */
  padding: 0 20px;
  list-style: none;
}

.nav-items li {
  text-align: center;
  flex: 1;
}

.nav-items a {
  color: white;
  text-decoration: none;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-items i {
  font-size: 24px; /* Taille des icônes */
  margin-bottom: 4px;
}
header {
  margin-bottom: 2rem;
}

.content img {
  object-fit: cover;
}

footer {
  margin-top: 3rem;
}

.nav-items a:hover {
  color: #00d4ff; /* Couleur d'accent */
}
.nav-items a.router-link-active {
  color: #00d4ff; /* Indiquer la section active */
}

</style>
