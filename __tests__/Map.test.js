import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Map from '../src/components/Map.vue'

describe('Map.vue', () => {
  it('initialise la popup comme invisible', () => {
    const wrapper = mount(Map)
    expect(wrapper.vm.popup.visible).toBe(false)
    expect(wrapper.find('#popup').exists()).toBe(false)
  })

  it('affiche la popup avec les bonnes infos quand showInfo est appelée', async () => {
    const wrapper = mount(Map)

    const fakeEvent = {
      clientX: 200,
      clientY: 150,
      currentTarget: {
        parentElement: {
          getBoundingClientRect: () => ({
            left: 100,
            top: 100,
          }),
        },
      },
    }

    wrapper.vm.showInfo('Titre test', 'Info test', '/test-lien', fakeEvent)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.popup.visible).toBe(true)
    expect(wrapper.vm.popup.title).toBe('Titre test')
    expect(wrapper.vm.popup.info).toBe('Info test')
    expect(wrapper.vm.popup.link).toBe('/test-lien')

    // Vérifie que le DOM a bien été mis à jour
    const popup = wrapper.find('#popup')
    expect(popup.exists()).toBe(true)
    expect(popup.text()).toContain('Titre test')
    expect(popup.text()).toContain('Info test')
    expect(popup.find('a').attributes('href')).toBe('/test-lien')
  })

  it('masque la popup quand closePopup est appelée', async () => {
    const wrapper = mount(Map)

    // Simule une popup visible d’abord
    wrapper.vm.popup.visible = true
    await wrapper.vm.$nextTick()

    wrapper.vm.closePopup()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.popup.visible).toBe(false)
    expect(wrapper.find('#popup').exists()).toBe(false)
  })
})
