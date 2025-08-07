import { describe, it, expect } from 'vitest';
import { mount, RouterLinkStub } from '@vue/test-utils';
import Nav from '../src/components/NavBarre.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

describe('Nav', () => {
    // Crée une seule instance de routeur en mémoire pour tous les tests
    // Les routes doivent être définies correctement pour que le router fonctionne
    const router = createRouter({
        history: createMemoryHistory(),
        routes: [
            { path: '/', component: { template: '<div>Home</div>' } },
            { path: '/parcours', component: { template: '<div>Parcours</div>' } },
            { path: '/scan', component: { template: '<div>Scan</div>' } },
            { path: '/ecole', component: { template: '<div>École</div>' } },
            { path: '/apropos', component: { template: '<div>À propos</div>' } },
        ],
    });

    it('Affiche le bon nombre de liens et le contenu', () => {
        const wrapper = mount(Nav, {
            global: {
                plugins: [router],
                stubs: { RouterLink: RouterLinkStub },
            },
        });
        
        const links = wrapper.findAllComponents(RouterLinkStub);
        
        // Vérifie qu'il y a bien 5 liens, comme dans votre navItems
        expect(links).toHaveLength(5);
        expect(links[0].props().to).toBe('/');
        expect(links[0].findAll('span')[1].text()).toBe('Accueil');
        expect(wrapper.attributes('aria-label')).toBe('Navigation principale');
    });

    it('Ajoute les classes actives au lien correspondant à la route', async () => {
        // Navigue vers la route '/parcours' avant de monter le composant
        await router.push('/parcours');
        // Il est crucial d'attendre que le routeur soit prêt
        await router.isReady();

        const wrapper = mount(Nav, {
            global: {
                plugins: [router],
                stubs: { RouterLink: RouterLinkStub },
            },
        });

        // Comme le composant est monté après la navigation, l'état actif est correct dès le départ
        const links = wrapper.findAllComponents(RouterLinkStub);
        const parcoursLink = links[1]; 
        
        // La classe active est 'text-noir'
        expect(parcoursLink.classes()).toContain('text-noir');
        // L'attribut aria-current doit être 'page'
        expect(parcoursLink.attributes('aria-current')).toBe('page');

        const homeLink = links[0];
        // La classe active ne doit pas être présente
        expect(homeLink.classes()).not.toContain('text-noir');
        // L'attribut aria-current doit être undefined
        expect(homeLink.attributes('aria-current')).toBeUndefined();
    });
});