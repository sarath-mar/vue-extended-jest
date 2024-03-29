import { mount, shallowMount } from '@vue/test-utils'
import { getFileContent } from '../utils';


describe('todoApp.js', async () => {
    let file
    let wrapper
    it('Initial is vue instance', async () => {
        file = await getFileContent("./components/todo/todoApp.js", "todo")
        
        wrapper = mount(file, {

        })
        
        expect(wrapper.vm).toBeTruthy()
    })
    it('Initial render of todo app', async () => {
        file = await getFileContent("./components/todo/todoApp.js", "todo")
        wrapper = mount(file, {

        })

        let todo = wrapper.find('[data-test="todo"]')
        expect(todo.exists()).toBe(false)
    })
    // it('add new value to todo', async () => {
    //     let todo = wrapper.find('[data-test="todo"]')
    //     expect(todo.exists()).toBe(false)
    // })

    it("called addNew fn when click on button", async () => {
        // wrapper.setMe
        // wrapper = mount(file, {

        // })
        let add1 = jest.fn()
        wrapper.setMethods({
            add: add1
        })
       
        wrapper.find('button').trigger("click")
        expect(add1).toHaveBeenCalled()
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