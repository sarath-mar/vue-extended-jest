import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { getFileContent } from '../utils';


describe('parent.js', async () => {
    let file
    let wrapper
    it('renders props.message when passed', async () => {
        file = await getFileContent("./components/basic/parent.js", "parent")
        let childFile = await getFileContent("./components/basic/child.js", "child")
        wrapper = mount(file, {
            stubs: {
                'child': childFile
            }
        })
        // console.log("parent : ", wrapper.html());
        expect(wrapper.text()).toContain('Child')

    })
})



