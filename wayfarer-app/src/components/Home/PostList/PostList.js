import React from 'react';
import {Container} from 'react-bootstrap';

import Post from './Post/Post';

const PostList = props => {
  return(
    <Container>
      <h2>Latest PostList</h2>
      <Container className="d-flex flex-row">
        <Post />
        <Post />
        <Post />
      </Container>
    </Container>
  );
};

export default PostList;