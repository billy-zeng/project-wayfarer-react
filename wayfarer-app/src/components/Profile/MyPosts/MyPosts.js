import React from 'react';

import PostMini from '../../PostList/PostMini/PostMini';

const MyPosts = props => {
  return(
      <div className="d-flex flex-column align-items-center justify-content-around">
        <PostMini />
        <PostMini />
        <PostMini />
      </div>
  );
};

export default MyPosts;