import { mount } from '@vue/test-utils'
import PartSelector from '@/components/PartSelector.vue'

describe('PartSelector', () => {
  it('renders a list of parts', () => {
    const parts = [
      { name: 'Part 1' },
      { name: 'Part 2' },
      { name: 'Part 3' }
    ]
    const wrapper = mount(PartSelector, {
      propsData: {
        parts,
        selectedIndex: 0
      }
    })
    const partElements = wrapper.findAll('.part')
    expect(partElements.length).toBe(parts.length)
    partElements.forEach((partElement, index) => {
      expect(partElement.text()).toBe(parts[index].name)
    })
  })

  it('emits a "part-selected" event when a part is clicked', () => {
    const parts = [
      { name: 'Part 1' },
      { name: 'Part 2' },
      { name: 'Part 3' }
    ]
    const wrapper = mount(PartSelector, {
      propsData: {
        parts,
        selectedIndex: 0
      }
    })
    const partElement = wrapper.find('.part')
    partElement.trigger('click')
    expect(wrapper.emitted('part-selected')).toBeTruthy()
    expect(wrapper.emitted('part-selected')[0]).toEqual([0])
  })

  it('highlights the active part', () => {
    const parts = [
      { name: 'Part 1' },
      { name: 'Part 2' },
      { name: 'Part 3' }
    ]
    const selectedIndex = 1
    const wrapper = mount(PartSelector, {
      propsData: {
        parts,
        selectedIndex
      }
    })
    const activePartElement = wrapper.find('.part.active')
    expect(activePartElement.text()).toBe(parts[selectedIndex].name)
  })
})