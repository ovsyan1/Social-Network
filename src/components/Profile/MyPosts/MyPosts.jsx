import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map(post => {
            return <Post message={post.message} count={post.likesCount}/>
    }) 

    return <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div className={classes.post}>
                    <div>
                        <textarea name="" id="" cols="10" rows="2"></textarea>
                    </div>
                    <div>
                       <button>Add post</button> 
                    </div>
                </div>
                    <div className={classes.posts}>
                        New post
                        {postsElements}
                    </div>
            </div>
}

export default MyPosts;