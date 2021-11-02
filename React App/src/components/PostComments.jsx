import React from 'react';

const PostComments = ({post, comments}) => {
    return (
        <div>
        <div className="post">
            <div className="postHeader">
                <span>{post.id}. {post.title}</span>
            </div>
            <div className="postContent">
                {post.body}
            </div>
        </div>
            <hr/>
            <h2 style={{textAlign: 'center', margin: '15px 0'}}>Комментарии</h2>
                {comments.map(comm =>
                    <div className="postComm">
                        <div key={comm.id}>
                            <div className="userComm">{comm.email}</div>
                            <div className="contentComm">{comm.body}</div>
                        </div>
                    </div>
                )}


        </div>

    );
};

export default PostComments;