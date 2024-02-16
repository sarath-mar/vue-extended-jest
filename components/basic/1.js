export default
    {
        template: `
        <div>
            <h5>test</h5>
            <p> {{message}}</p>
            <p> end</p>
        </div>`,
        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
