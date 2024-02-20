import { mount ,shallowMount} from '@vue/test-utils'
// import { getFileContent } from '../utils';
import file from "../components/basic/todoTest"


// import { mount, shallowMount } from '@vue/test-utils'
// import { getFileContent } from '../utils';

describe('todoAppTest.js', async () => {
    // let file
    let wrapper
    it('Initial is vue instance', async () => {
        // file = await getFileContent("./components/todo/todoApp.js", "todo")
        wrapper = mount(file, {

        })
        
        expect(wrapper.vm).toBeTruthy()
    })
    it('Initial render of todo app', async () => {
        // file = await getFileContent("./components/todo/todoApp.js", "todo")
        wrapper = mount(file, {

        })

        let todo = wrapper.find('[data-test="todo"]')
        expect(todo.exists()).toBe(false)
    })
    it("called addNew fn when click on button", async () => {
       
        let add = jest.fn()
        wrapper.setMethods({
            add: add

        })
       
        wrapper.find('button').trigger("click")
        expect(add).toHaveBeenCalled()
    })
    it("add new todo", async () => {
        wrapper = mount(file, {

        })
        wrapper.setData({ newTodo: "added" })
        // wrapper.get('[data-test="new-todo"]').setValue('New todo')
        const button = wrapper.find('button')
        await button.trigger('click')
        // let todo = wrapper.find('[data-test="todo"]')
        // expect(todo.exists()).toBe(true)
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    })
    // it('create a todo',()=>{

    // })
})