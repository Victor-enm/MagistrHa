import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CardHome from '../src/components/CardHome.vue';


describe ('CardHome', ()=> {
    it('Affiche le titre et étape', ()=> {
        const wrapper = mount(CardHome, { props: {title:'Titre test', etape:'03'} }); 

        expect(wrapper.text()).toContain('Titre test');
        expect(wrapper.text()).toContain('03');

    });

    it('affiche image et son alt', () => {
        const wrapper = mount(CardHome, { props: { img:'/images/test.webp', alt:'alternative'}});
        const img = wrapper.find('img');

        expect(img.attributes('src')).toBe('/images/test.webp');
        expect(img.attributes('alt')).toBe('alternative');

    });

    it('Bouton renvoie vers des pages internes', () => {
        const wrapper = mount(CardHome, { props: { link:'/parcours'}, global: { stubs: ['RouterLink']}
    });
    const routerLink = wrapper.findComponent({ name: 'RouterLink' });

    expect(routerLink.exists()).toBe(true);
    expect(routerLink.props().to).toBe('/parcours');
    });
});