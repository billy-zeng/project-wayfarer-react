import React from 'react';

import PostMini from '../../PostList/PostMini/PostMini';

const MyPosts = props => {
  return(
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
      <h2>My Posts</h2>
      <div className="d-flex flex-column align-items-center justify-content-around">
        <PostMini />
        <PostMini />
        <PostMini />
      </div>
    </div>
  );
};

export default MyPosts;