import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
                My posts
                    <div className={classes.posts}>
                        New post
                        <Post message="Hi, how are you?" count="23"/>
                        <Post message="It's my first post" count="56"/>
                        <Post message="3" count="2"/>
                        <Post message="4" count="223"/>
                    </div>
            </div>
}

export default MyPosts;