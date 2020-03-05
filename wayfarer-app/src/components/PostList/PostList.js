import React from 'react';

// import Post from './Post/Post';
import PostListHeader from './PostListHeader/PostListHeader';
import PostMini from './PostMini/PostMini';

class PostList extends React.Component {


  displayPosts = posts => {
    return posts.map(post => {
      return <PostMini key={post._id} postData={post} />
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <PostListHeader />
        {this.displayPosts(this.props.posts)}
      </div>
    );
  };
};

export default PostList;
