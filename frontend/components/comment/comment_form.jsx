import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }

    }
    handleInput(e) {
        e.preventDefault()

    }

    render() {
        return (
            <form>
                <input type="text" 
                value={this.state.body}
                />

            
            </form>

        )
    }
}

export default CommentForm