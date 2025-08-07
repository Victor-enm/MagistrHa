import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import TimeLine from '../src/components/TimeLine.vue';
import ImageViolet from '../src/components/ImageViolet.vue';

describe ('TimeLine', () => {
    it('affichage titre et description', () => {
        const wrapper = mount(TimeLine, { props: {
            titre: '1455', 
            description: 'Monument',
        }, global: {
            stubs: {
                Puce: true,
                ImageViolet: true,
            },
        },});
        expect(wrapper.find('h2').text()).toContain('1455');
        expect(wrapper.find('p').text()).toContain('Monument');
    }); 

    it('affichage image si la prop image est présente', () => {
        const wrapper = mount(TimeLine, { props: {
            titre: '1455', 
            description: 'Monument',
            img: '/image/test.jpg',
            alt: 'alttest',
        }, global: {
            stubs: {
                Puce: true,
            },
        },});
        const image = wrapper.findComponent(ImageViolet);

        expect(image.exists()).toBe(true);
        expect(image.props('img')).toBe('/image/test.jpg');
        expect(image.props('alt')).toBe('alttest');
    }); 


});
