<template>
    <div>
      <h1>Page QR Code : {{ id }}</h1>
      <p>Contenu dynamique pour le QR code.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const id = ref(route.params.id);
  
      onMounted(() => {
        console.log(`QR Code ID: ${id.value}`);
      });
  
      return { id };
    },
  };
  </script>
  