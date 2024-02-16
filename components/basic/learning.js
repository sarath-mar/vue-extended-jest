Vue.component("learning", {
    template: `
    <div>
        <h5>Learning</h5>
        <h5>test</h5>
        <p> {{message}}</p>
    </div>`,
    props: {
        message: {
            type: String,
            required: true
        }
    }
})