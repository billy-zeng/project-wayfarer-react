import React from 'react';

const PostDetailHeader = props => {
  return(
    <>
      <h1>{props.postData.title}</h1>
      <small>by {props.postData.author}</small>
    </>
  );
};

export default PostDetailHeader;
