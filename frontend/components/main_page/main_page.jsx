import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
            <div className="pic-test">

            </div>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
    return (
        <header>
            <div>
                {display}
                <div className="pic-test">

                </div>
            </div>
        </header>
    )
}

// class MainForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: []
//         }
//         this.fetchPosts = this.fetchPosts.bind(this)
//     }
//     fetchPosts() {
//         $.ajax ({
//             url: "api/posts"
//         }).then(posts => {
//             debugger;
//             this.setState(posts)
//         })
//     }
//     componentDidMount() {
//         this.fetchPosts();
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
