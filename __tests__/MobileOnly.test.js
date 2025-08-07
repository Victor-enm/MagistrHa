import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import MobileOnly from '../src/components/MobileOnly.vue';
import { nextTick } from 'vue';

describe('MobileOnly', () => {
  // Stub pour contrôler la largeur de la fenêtre
  vi.stubGlobal('innerWidth', 768);

  it('affiche le contenu du slot sur mobile', () => {
    // Simuler une taille d'écran mobile
    vi.stubGlobal('innerWidth', 768);
    const wrapper = mount(MobileOnly, {
      slots: { default: '<div>Contenu mobile</div>' },
    });
    
    // Vérifier que le contenu du slot est rendu
    expect(wrapper.text()).toContain('Contenu mobile');
    // Et que le message pour ordinateur n'apparaît pas
    expect(wrapper.text()).not.toContain('Application non disponible');
  });

  it('affiche le message pour ordinateur sur grand écran', () => {
    // Simuler une taille d'écran d'ordinateur
    vi.stubGlobal('innerWidth', 1024);
    const wrapper = mount(MobileOnly, {
      slots: { default: '<div>Contenu mobile</div>' },
    });

    // Vérifier que le message pour ordinateur est rendu
    expect(wrapper.text()).toContain('Application non disponible');
    // Et que le contenu du slot n'est pas rendu
    expect(wrapper.text()).not.toContain('Contenu mobile');
  });

  it('réagit correctement au redimensionnement de la fenêtre', async () => {
    // Démarrer sur un écran d'ordinateur
    vi.stubGlobal('innerWidth', 1024);
    const wrapper = mount(MobileOnly, {
      slots: { default: '<div>Contenu mobile</div>' },
    });

    // Simuler le redimensionnement vers un écran mobile
    vi.stubGlobal('innerWidth', 768);
    window.dispatchEvent(new Event('resize'));
    await nextTick(); // Attendre que Vue mette à jour le DOM

    // Vérifier que le contenu s'est adapté
    expect(wrapper.text()).toContain('Contenu mobile');
    expect(wrapper.text()).not.toContain('Application non disponible');
  });
});