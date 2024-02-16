const { mount } = require("@vue/test-utils");
const { getFileContent } = require("../utils");

describe('Mounted App', async () => {

let counter
let wrapper
    test('does a wrapper exist', async () => {
         counter = await getFileContent("./components/basic/sum.js", "sum")
         wrapper = mount(counter);
        expect(wrapper.exists()).toBe(true)
    })
    it('renders correctly with different data', async () => {
        // let counter = await getFileContent("sum.js", 'sum')
        // const wrapper = mount(counter);
       await wrapper.setData({ x1: 5, x2: 10 })
        // await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('10')
    })
    it('button click without correct sum', async () => {
        // let counter = await getFileContent("sum.js", 'sum')
        // const wrapper = mount(counter);
        expect(wrapper.vm.message).toBe("")
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('TRY AGAIN')
    })
    it('button click with correct sum data given for test before', async () => {
        // let counter = await getFileContent("sum.js", 'sum')
        // const wrapper = mount(counter);
        wrapper.setData({ guess: 15 })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('SUCCESS!')
    })
    it('button click with correct sum', async () => {
        // let counter = await getFileContent("sum.js", 'sum')
        // const wrapper = mount(counter);
        wrapper.setData({ guess: 15, x1: 5, x2: 10 })
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.message).toBe('SUCCESS!')
    })
})