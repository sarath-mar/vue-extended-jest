Vue.component("sum", {
    template: `
    <div>
        <div>
        <h3>Let us test your arithmetic.</h3>
        <p>What is the sum of the two numbers?</p>
        <div class="inline">
            <p>{{ x1 }} + {{ x2 }} =</p> <input v-model="guess"> <button v-on:click="check">Check Answer</button>
        </div>
        <button v-on:click="refresh">Refresh</button>
        <p>{{message}}</p>
        </div>
    </div>
    `,
    data() {
        return {
            x1: Math.ceil(Math.random() * 100),
            x2: Math.ceil(Math.random() * 100),
            guess: "",
            message: ""
        }
    },
    methods: {
        check() {
            if (this.x1 + this.x2 === parseInt(this.guess)) {
                this.message = "SUCCESS!"
            } else {
                this.message = "TRY AGAIN"
            }
        },
        refresh() {
            this.x1 = Math.ceil(Math.random() * 100);
            this.x2 = Math.ceil(Math.random() * 100);
        }
    }
})

