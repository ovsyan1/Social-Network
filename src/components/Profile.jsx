import React from 'react';
import classes from './Profile.module.css';


const Profile = () => {
    return <div className={classes.content}>
                <div>
                    <img height="300px" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
                </div>
                <div>
                ava + description
                </div>
                <div>
                My posts
                <div className={classes.posts}>
                    New post
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
                </div>
            </div>
}

export default Profile;