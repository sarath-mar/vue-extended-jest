import { mount } from '@vue/test-utils'
import { getFileContent } from '../utils';


function testFile() {
    let counter
    let wrapper
    describe('counter', async () => {
        it('renders the component', async () => {
            counter = await getFileContent("./components/basic/counter.js", "counter-main")
            wrapper = mount(counter)
            expect(wrapper.html()).toContain('<span class="count">1</span>')

        })
        it('has a button', async () => {
            expect(wrapper.exists('button')).toBe(true)
        })
        xit('has a hey', async () => {
            expect(wrapper.text()).toContain("hey")
        })
        xit('has a hello', async () => {
            expect(wrapper.text()).toContain("hello")
        })


        it('button should increment the count', async () => {
            expect(wrapper.vm.count).toBe(1)
            const button = wrapper.find('button')
            button.trigger('click')
            expect(wrapper.vm.count).toBe(2)
        })
    })
}
testFile()


