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
    }





    render() {
        const { logout, requestAllPost, posts} = this.props
        console.log(posts)
        
            return (
                <header>
                    
                    <section className="main-page-container">
                        <div className="insta-post-container">
                            <PostIndex posts={posts}/>
                        </div>
                        <button onClick={logout}>Logout</button>
                    </section>    

                </header>
            )
        }
}

export default MainPage
