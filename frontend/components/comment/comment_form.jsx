import React from 'react'
import './comment.css'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.submitComment = this.submitComment.bind(this)
    }
    handleInput(e) {
        e.preventDefault()
        this.setState({body: e.currentTarget.value})
    }

    submitComment(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append("comment[body]", this.state.body)
        this.props.createComment(formData)
        this.setState({body: ''})
    }

    render() {
        return (
            <form className="comment-form" onSubmit={this.submitComment}>
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