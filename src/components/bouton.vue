<template>
    <div class="flex justify-center mt-6">
  <component
    :is="componentType"
    v-bind="componentProps"
    class="inline-flex items-center justify-center px-6 py-3 rounded-md bg-rouge-1 text-blanc font-MtMedium text-base"
    :class="additionalClasses"
  >
    {{ label }}
  </component>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'; // N'oubliez pas d'importer RouterLink

const props = defineProps({
  to: {
    type: [String, Object], // Peut être une chaîne ou un objet de route
    default: null, // Lien interne
  },
  href: {
    type: String,
    default: null, // Lien externe
  },
  label: {
    type: String,
    required: true, // Le label est essentiel pour un bouton
  },
  // Optionnel: pour ajouter des classes Tailwind supplémentaires par l'utilisateur
  additionalClasses: {
    type: [String, Array, Object],
    default: '',
  },
  // Optionnel: pour gérer l'état désactivé
  disabled: {
    type: Boolean,
    default: false,
  },
});

// Détermine le type de composant à utiliser (a, RouterLink, ou button)
const componentType = computed(() => {
  if (props.to) return RouterLink;
  if (props.href) return 'a';
  return 'button';
});

// Détermine les props spécifiques à passer au composant choisi
const componentProps = computed(() => {
  const commonProps = {
    // Les attributs disabled sont gérés par toutes les balises et RouterLink
    disabled: props.disabled,
  };

  if (componentType.value === 'a') {
    // Pour un lien externe, ajouter href et les attributs de sécurité
    const linkAttrs = {};
    // Ne pas ajouter target="_blank" si c'est une ancre interne (ex: #section)
    if (props.href && !props.href.startsWith('#')) {
      linkAttrs.target = '_blank';
      linkAttrs.rel = 'noopener noreferrer';
    }
    return { ...commonProps, href: props.href, ...linkAttrs };
  }

  if (componentType.value === RouterLink) {
    // Pour RouterLink, passer la prop 'to'
    return { ...commonProps, to: props.to };
  }

  // Pour un simple <button>, aucune prop spécifique n'est nécessaire hormis 'disabled'
  return commonProps;
});
</script>