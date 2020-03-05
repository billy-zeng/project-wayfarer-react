import React from 'react';

const PostInteraction = props => {
  return (
    <div className="container d-flex flex-row align-items-end justify-content-end">
      <a className="btn btn-primary text-light mr-3">Edit Post</a>
      <a className="btn btn-danger text-light mr-3">Delete Post</a>
    </div>
  );
};

export default PostInteraction;
