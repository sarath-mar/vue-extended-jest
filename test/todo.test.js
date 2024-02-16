import { mount, shallowMount } from '@vue/test-utils'
import { getFileContent } from '../utils';


describe('todoApp.js', async () => {
    let file
    let wrapper
    it('Initial render of todo app', async () => {
        file = await getFileContent("./components/todo/todoApp.js", "todo")
        wrapper = mount(file,{
            
        })
        let todo = wrapper.find('[data-test="todo"]')
        expect(todo.exists()).toBe(false)
    })
    it('add new value to todo', async () => {
        let todo = wrapper.find('[data-test="todo"]')
        expect(todo.exists()).toBe(false)
    })
})