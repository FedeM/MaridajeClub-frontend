import React, { useState } from 'react';

import { BrowserView, MobileView } from 'react-device-detect'
import {EventResponsive, EventDesktop} from '../../';
import { welcomeMessage } from '../../../../lib/assets/welcomeMessage';
import { isAuthenticate } from '../../../../lib/auth';
import { user } from '../../../../lib/user';


const Events = ({enterEvent, setEnterEvent}) => {


    const [post, setPost] = useState({
        photo: "",
        user: "",
        msg:"",
        role: 0
    })
    const [posts, setPosts] = useState(welcomeMessage(isAuthenticate, user))

    const handleChange = (e)=>{
        const {value} = e.target;
        setPost({
            photo:user.photo,
            user:user.name,
            msg:value,
            role: user.role
        })
    }

    const submitPost = (e)=>{
        e.preventDefault()
        if(post.msg.length > 0){
            setPosts([...posts,{
                photo: post.photo,
                user: post.user,
                msg: post.msg,
                role: post.role
            }])
        }
        e.target.reset()
        setPost({
            ...post,
            msg:""
        })
    }




    return (
        <>
            <MobileView>
                <EventResponsive
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                    close={()=> setEnterEvent({
                        activate: false,
                        eventId: "",
                        eventUrl: "",
                        eventIsLive: false
                    })}
                    event={enterEvent}
                />
            </MobileView>
            <BrowserView>
                <EventDesktop
                    submitPost={submitPost}
                    handleChange={handleChange}
                    posts={posts}
                    close={()=> setEnterEvent({
                        activate: false,
                        eventId: "",
                        eventUrl: "",
                        eventIsLive: false
                    })}
                    event={enterEvent}
                />
            </BrowserView>
        </>
    );
};

export default Events;