import { mount ,shallowMount} from '@vue/test-utils'
import { getFileContent } from '../utils';



describe('Learning.js', async () => {
    let file
    let wrapper
    it('renders props.message when passed', async () => {
        file = await getFileContent("./components/basic/learning.js", "learning")
        wrapper = shallowMount(file,{
            propsData:{
                message:"Hello Friends"
            }
        })
        expect(wrapper.text()).toContain('Hello Friends')

    })
})



