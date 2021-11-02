import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div className="post">
            <div className="postHeader">
                <span>{props.post.id}. {props.post.title}</span>
            </div>
            <div className="postContent">
                {props.post.body}
            </div>
            <div className="btn-group">
                <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;