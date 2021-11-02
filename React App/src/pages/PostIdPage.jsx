import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import PostComments from "../components/PostComments";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const[fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const[fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostsById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Вы открыли страницу поста номер {params.id}</h1>

            {isComLoading
                ? <Loader/>
                : <PostComments
                    post = {post}
                    key = {post.id}
                    comments = {comments}
                />
            }
        </div>
    );
};

export default PostIdPage;