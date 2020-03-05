import React from 'react';
import PostListHeader from './PostListHeader/PostListHeader';
import PostMini from './PostMini/PostMini';

class PostList extends React.Component {

  displayPosts = posts => {
    return posts.map(post => {
      return <PostMini key={post._id} postData={post} updatePosts={this.props.updatePosts} />
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <PostListHeader updatePosts={this.props.updatePosts} />
        {this.displayPosts(this.props.posts)}
      </div>
    );
  };
};

export default PostList;
