module.exports = {
    template: `
    <div class="todo">
        <h4>Todo</h4>
        <input data-test="new-todo" v-model="newTodo"/>
        <button @click="add">Add</button>
        <ul>
            <li v-for="todo in todoList" data-test="todo">{{todo.text}}</li>
        </ul>
    </div>
  `,

    data() {
        return {
            todoList: [
                // {id:1,text:"sam",completed:false}
            ],
            newTodo: ""
        }
    },

    methods: {
        add() {
            let newObject = { id: this.todoList.length + 1, text: this.newTodo, completed: false }
            this.todoList.push(newObject)
            this.newTodo = ''
        }
    }

}