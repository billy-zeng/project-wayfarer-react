import React from 'react';

import PostMini from '../../../PostList/PostMini/PostMini';

const CityPosts = (props) => {
  return(
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <PostMini/>
      <PostMini/>
      <PostMini/>
    </div>
  );
};

export default CityPosts;