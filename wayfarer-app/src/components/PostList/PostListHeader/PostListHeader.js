import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PostForm from '../PostForm/PostForm';

class PostListHeader extends React.Component {
  state = {
    show: false
  }

  handleOpen = () => {
    this.setState({
      show: true,
    })
  };

  handleClose = () => {
    this.setState({
      show: false,
    })
  };

  render() {
    return (
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <h1>Posts</h1>
        <a className="btn btn-warning btn-lg" onClick={this.handleOpen}>Add Post (+)</a>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{<h2>Create a post</h2>}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostForm formMethod="create" updatePosts={this.props.updatePosts} handleClose={this.handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <a className="btn btn-secondary text-light" onClick={this.handleClose}>Cancel</a>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
};

export default PostListHeader;
