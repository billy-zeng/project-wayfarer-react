import React from 'react';
import PostDetailHeader from './PostDetailHeader/PostDetailHeader';
import PostDetailMain from './PostDetailMain/PostDetailMain';
import PostInteraction from '../PostList/PostInteraction/PostInteraction';
import axios from 'axios';

class PostDetail extends React.Component {
  state = {
    postData: ''
  }

  getPostData = (postId) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${postId}`)
      .then(res => {
        this.setState({
          postData: res.data.data
        });
      })
      .catch(err => console.log(err.response))
  }
  
  componentDidMount() {
    this.getPostData(this.props.match.params.postId)
  };

  render() {
    console.log(this.state.postData)
    // console.log(this.props.match.params.postId);
    // this.getPostData(this.props.match.params.postId)
    return (
      <div id="post-detail-wrapper" className="d-flex flex-column align-items-center justify-content-center">
        <PostDetailHeader postData={this.state.postData} />
        <PostDetailMain postData={this.state.postData} />
        <PostInteraction postData={this.props.postData} />
      </div>
    );
  };
};

export default PostDetail;
