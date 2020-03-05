import React from 'react';

// import Post from './Post/Post';
import PostListHeader from './PostListHeader/PostListHeader';
import PostMini from './PostMini/PostMini';

class PostList extends React.Component {
  state = {
    posts: []
  };

  // // triggers after first render
  // componentDidMount() {
  //   console.log('[PostList] did mount')
  //   // update state based on information that we passed it
  //   // receives an object
  //   this.setState({
  //     posts: api
  //   });
  // };

  displayPosts = posts => {
    console.log("[PostList] display posts")
    if (this.props.name) {
      posts = posts.filter(post => {
        return post.user.username === this.props.name;
      });
    }
    
    return posts.map(post => {
      return <PostMini key={post._id} postData={post} />
    });
  };

  render() {
    console.log('[PostList] render', this.state);
    return (
      <>
        <PostListHeader />
        {this.displayPosts(this.state.posts)}
      </>
    );
  };
};

export default PostList;
