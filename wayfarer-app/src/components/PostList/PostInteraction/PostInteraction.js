import React from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

class PostInteraction extends React.Component {
  state = {
    show: false,
    showEdit: false,
  };

  // opens edit form
  handleOpenEdit = () => {
    this.setState({
      show: true,
      showEdit: true,
    })
  };

  // opens delete confirmation
  handleOpenDelete = () => {
    this.setState({
      show: true,
      showEdit: false
    })
  };

  handleClose = () => {
    this.setState({
      show: false,
    })
  };

  // handleEditPost = () => {
  //   console.log(this.props);
  //   axios
  //     .put(`${process.env.REACT_APP_API_URL}/posts/${this.props.postData._id}`)
  //     .then(res => {
  //       console.log(res);
  //       this.props.history.push('/login');
  //     })
  //     .catch(err => console.log(err.response))
  // };

  handleDeletePost = event => {
    event.preventDefault();
    axios
      .delete(`${process.env.REACT_APP_API_URL}/posts/${this.props.postData._id}`)
      .then(res => {
        console.log(res)
        this.props.updateCityPosts();
      })
      .catch(err => console.log(err));
  }
 
  render(){
    console.log(this.props)
    return (
      <div className="container d-flex flex-row align-items-end justify-content-end">
        <a className="btn btn-primary text-light mr-3" onClick={this.handleOpenEdit}>Edit Post</a>
        <a className="btn btn-danger text-light mr-3" onClick={this.handleOpenDelete}>Delete Post</a>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.state.showEdit ? <h2>Edit Post</h2> : <h2>Delete Post</h2>}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.showEdit ? "Edit Form Here" : <h3>Are you sure you want to delete this?</h3>}</Modal.Body>
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
