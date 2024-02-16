import { mount ,shallowMount} from '@vue/test-utils'
import { getFileContent } from '../utils';
import one from "../components/basic/1"


describe('1.js', async () => {
    let file
    let wrapper
    it('renders 1 props.message when passed', async () => {
        // file = await getFileContent("learning.js", "learning")
        wrapper = shallowMount(one,{
            propsData:{
                message:"hello"
            }
        })
        expect(wrapper.text()).toContain('hello')

    })
})