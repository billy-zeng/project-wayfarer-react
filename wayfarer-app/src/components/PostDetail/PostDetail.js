import React from 'react';

import PostDetailHeader from './PostDetailHeader/PostDetailHeader';
import PostDetailMain from './PostDetailMain/PostDetailMain';

class PostDetail extends React.Component {
  state = {
    title: "",
    author: "",
    content: ""
  }
  
  render() {
    return (
      <div id="post-detail-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <PostDetailHeader />
        <PostDetailMain />
      </div>
  );
  };
};

export default PostDetail;