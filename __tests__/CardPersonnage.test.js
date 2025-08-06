import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardPersonnage from '../src/components/CardPersonnage.vue'

// 🧪 Données de test
const props = {
  nom: 'René Darriet',
  date: '1911 - 2010',
  img: '/images/rene.jpg',
  alt: 'Photo de René Darriet',
}

describe('CardPersonnage.vue', () => {
  it('affiche correctement le nom et la date', () => {
    const wrapper = mount(CardPersonnage, { props })

    // Texte du paragraphe
    expect(wrapper.text()).toContain('René Darriet')
    expect(wrapper.text()).toContain('1911 - 2010')
  })

  it('affiche l’image avec le bon src et alt', () => {
    const wrapper = mount(CardPersonnage, { props })
    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/images/rene.jpg')
    expect(img.attributes('alt')).toBe('Photo de René Darriet')
  })

  it('inclut le composant Fleche', () => {
    const wrapper = mount(CardPersonnage, { props })
    const svg = wrapper.find('svg') // le SVG rendu du fichier Fleche.svg

    expect(svg.exists()).toBe(true)
  })
})
