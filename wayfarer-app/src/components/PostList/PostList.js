import React from 'react';

import Post from './Post/Post';

const PostList = props => {
  return(
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <h2>Latest Posts</h2>
      <div className="d-flex flex-row align-items-center justify-content-around">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostList;