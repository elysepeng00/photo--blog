import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get('/posts')
        // axios.get('https://dummyapi.io/data/api/post', { headers: { 'app-id':'605243f2b759992a3b9bc6f2'}})
            .then(response => {
                // console.log(response);
                // const posts = response.data.data.slice(0, 4);
                // this.setState({posts: posts});
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Elyse Peng'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId : id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post, key) => {
                const image = post.image
                    return <Post 
                        key= {post.id} 
                        // title = {post.text}
                        // image = {post.image}
                        title = {post.title} 
                        author = {post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />;
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;