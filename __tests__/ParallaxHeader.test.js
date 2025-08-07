import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Parallax from '../src/components/ParallaxHeader.vue';
import { nextTick } from 'vue';

describe('Parallax', () => {
    vi.stubGlobal('scrollY', 0);

    it('rend l\'image avec les bonnes props et la hauteur correcte', () => {
        const wrapper = mount(Parallax, {
            props: {
                imageUrl: '/path/to/image.jpg',
                imageAlt: 'Description de l\'image',
            },
        });
        
        const container = wrapper.find('.parallax-container');
        const image = wrapper.find('.parallax-image');

        expect(image.attributes('src')).toBe('/path/to/image.jpg');
        expect(image.attributes('alt')).toBe('Description de l\'image');
    });

    it('met à jour la transformation de l\'image lors du défilement', async () => {
        const wrapper = mount(Parallax, {
            props: {
                imageUrl: '/path/to/image.jpg',
                imageAlt: 'Description de l\'image',
            },
        });

        const image = wrapper.find('.parallax-image');

        // Vérification du style initial
        expect(image.attributes('style')).toContain('transform: translateY(0px)');

        // Simuler un défilement de 100 pixels
        vi.stubGlobal('scrollY', 100);
        window.dispatchEvent(new Event('scroll'));
        await nextTick(); // Attendre la mise à jour du DOM

        // Vérifier que le transform est mis à jour avec le bon calcul (100 * 0.5)
        expect(image.attributes('style')).toContain('transform: translateY(50px)');
    });

    it('ajoute et supprime les écouteurs d\'événement au montage et démontage', () => {
        // Espionne les méthodes `addEventListener` et `removeEventListener`
        const addSpy = vi.spyOn(window, 'addEventListener');
        const removeSpy = vi.spyOn(window, 'removeEventListener');

        const wrapper = mount(Parallax, { props: { imageUrl: 'test.jpg' } });
        
        // Vérifie que l'écouteur a été ajouté au montage
        expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
        
        // Simule la destruction du composant
        wrapper.unmount();
        
        // Vérifie que l'écouteur a été retiré au démontage
        expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
});