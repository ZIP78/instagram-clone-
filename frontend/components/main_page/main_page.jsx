import React from 'react';
import { Link } from 'react-router-dom';
import Upload from '../upload/upload_container'
import PostIndex from './post_index'
import './main_page.css'




class MainPage extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.requestAllPost()
        
        // this.props.requestAllComments()
    }





    render() {
        const { logout, posts, comments, requestAllComments} = this.props
        // console.log(posts)
        
            return (
                <header>
                    
                    <section className="main-page-container">
                        <div className="insta-post-container">
                            <PostIndex posts={posts} comments={comments} requestAllComments={requestAllComments}/>
                        </div>
                        <button onClick={logout}>Logout</button>
                    </section>    

                </header>
            )
        }
}

export default MainPage

