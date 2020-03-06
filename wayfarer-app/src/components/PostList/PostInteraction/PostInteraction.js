import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import PostForm from '../PostForm/PostForm';

class PostInteraction extends React.Component {
  state = {
    show: false,
    showEdit: false,
  };

  // opens edit form
  handleOpenEdit = () => {
    // user may only edit their own posts
    if (this.props.postData.authorId == localStorage.getItem('uId')) {
      this.setState({
        show: true,
        showEdit: true,
      })
    } else {
      this.handleClose();
      alert("Unauthorized. You may only edit your own posts.");
    }
  };

  // opens delete confirmation
  handleOpenDelete = () => {
    // user may only delete their own posts
    if (this.props.postData.authorId == localStorage.getItem('uId')) {
      this.setState({
        show: true,
        showEdit: false
      })
    } else {
      this.handleClose();
      alert("Unauthorized. You may only delete your own posts.");
    }
  };

  // close modal
  handleClose = () => {
    this.setState({
      show: false,
    })
  };

  handleDeletePost = event => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/${this.props.postData._id}`)
      .then(res => {
        this.props.updatePosts();
      })
      .catch(err => console.log(err));
  }
 
  render(){
    return (
      <div className="container d-flex flex-row align-items-end justify-content-end mb-2">
        <a className="btn btn-primary text-light mr-3" onClick={this.handleOpenEdit}>Edit Post</a>
        <a className="btn btn-danger text-light mr-3" onClick={this.handleOpenDelete}>Delete Post</a>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.showEdit ? <h2>Edit Post</h2> : <h2>Delete Post</h2>}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.showEdit ? <PostForm formMethod="edit" postData={this.props.postData} updatePosts={this.props.updatePosts} handleClose={this.handleClose} /> : <h4>Are you sure you want to delete this?</h4>}</Modal.Body>
          <Modal.Footer>
            {this.state.showEdit
              ? <a className="btn btn-secondary text-light" onClick={this.handleClose}>Cancel</a>
              : <>
                  <a className="btn btn-secondary text-light" onClick={this.handleClose}>Cancel</a>
                  <a className="btn btn-danger text-light" onClick={this.handleDeletePost}>Delete Post</a>
                </>
              }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default PostInteraction;
