import React from 'react';

const PostInteraction = props => {
  return (
    <div className="container d-flex flex-row align-items-end justify-content-end">
      <a className="btn btn-info">Edit Post</a>
      <a className="btn btn-danger">Delete Post</a>
    </div>
  );
};

export default PostInteraction;
