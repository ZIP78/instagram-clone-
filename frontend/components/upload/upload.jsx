import React from 'react'

class Upload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            photoFile: null
        }
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        e.preventDefault()
        this.setState({body: e.currentTarget.value})
            this.setState({body: null}) 
        
    }


    handleFile(e) {
        e.preventDefault()
        this.setState({photoFile: e.currentTarget.files[0]})
        
    }

    handleSubmit(e) {
        
        e.preventDefault()
        const formData = new FormData()
        formData.append("post[body]", this.state.body)
        if (this.state.photoFile) {
        formData.append("post[photo]", this.state.photoFile)
        }

        this.props.createPost(formData) 
        this.setState({ body: '' });        
    }

    render() {
         console.log(this.state)

        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type="file"
              style={{ width: "210px" }}
              onChange={this.handleFile}              
            />

            <input
              type="text"
              onChange={this.handleInput}
              value={this.state.body}
            />

            <button>Create Post</button>
          </form>
        );
    }
}

export default Upload