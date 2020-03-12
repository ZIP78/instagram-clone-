import React from 'react'
import './comment.css'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e) {
        e.preventDefault()
        this.setState({body: e.currentTarget.value})
    }

    submitComment() {

    }

    render() {
        return (
            <form className="comment-form">
                <textarea className="add-comment"
                placeholder="Add a comment.."
                value={this.state.body}
                onChange={this.handleInput}
                />

            <button className="post-comment-button">Post</button>
            </form>

        )
    }
}

export default CommentForm