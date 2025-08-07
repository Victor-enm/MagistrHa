import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Bouton from '../src/components/BoutonRouge.vue';


describe('Bouton', () => {
    it ('affiche le bon label', () => {
        const wrapper = mount(Bouton, { props: { label:'Cliquer ici'} });

        expect(wrapper.text()).toContain('Cliquer ici');
    });

    it('Réagit au clic quand actif', async () => {
        const wrapper = mount(Bouton, { props: { disabled:false}});

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('click');
        expect(wrapper.emitted('click')).toHaveLength(1);
    });

    
    it('Ne réagit pas au clic quand inactif', async () => {
        const wrapper = mount(Bouton, { props: { disabled:true}});

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click')).toBeUndefined();
    });

    it('Devinent un a pour les liens externes', ()=> {
        const wrapper = mount(Bouton, { props: { href:'https://www.enm.justice.fr/'}});
        const link = wrapper.find('a');

        expect(link.exists()).toBe(true);
        expect(link.attributes('href')).toBe('https://www.enm.justice.fr/')
    });

  it('Rend un RouterLink pour les liens internes', () => {
    const wrapper = mount(Bouton, {
        props: { to: '/parcours' }, global: { stubs: ['RouterLink']}
    });
    const routerLink = wrapper.findComponent({ name: 'RouterLink' });

    expect(routerLink.exists()).toBe(true);
    expect(routerLink.props().to).toBe('/parcours');
    });

    it('ajoute des classes CSS', () => {
        const customCSS = 'mb-2 border'
        const wrapper = mount (Bouton, { props: {additionalClasses: customCSS} });
        const button = wrapper.find('button');

        expect(button.classes()).toContain('mb-2');
        expect(button.classes()).toContain('border');
    });

    it('gestion des classes CSS vides', () => {
        const wrapper = mount (Bouton, { props: {additionalClasses: ''} });
        const button = wrapper.find('button');

        expect(button.classes()).not.toContain('');
    });

});