import React from 'react';

import PostMini from '../../PostList/PostMini/PostMini';
import PostList from '../../PostList/PostList';

const MyPosts = props => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <PostList posts={props.posts} updatePosts={props.updateUserPosts} />
    </div>
  );
};

export default MyPosts;
