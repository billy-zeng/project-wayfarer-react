import React from 'react';
import Modal from 'react-bootstrap/Modal';

import PostMini from '../../../PostList/PostMini/PostMini';

// const CityPosts = (props) => {
//   return(
//     <div className="container d-flex flex-column justify-content-center align-items-center">
//       <div className="container d-flex flex-row justify-content-between align-items-center">
//         <h1>Posts</h1>
//         <a className="btn btn-warning btn-lg">Add Post (+)</a>
//       </div>
//       <PostMini/>
//       <PostMini/>
//       <PostMini/>
//     </div>
//   );
// };

class CityPosts extends React.Component {
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
    return(
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="container d-flex flex-row justify-content-between align-items-center">
          <h1>Posts</h1>
          <a className="btn btn-warning btn-lg" onClick={this.handleOpen}>Add Post (+)</a>
        </div>
        <PostMini/>
        <PostMini/>
        <PostMini/>
        
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <h1>POST FORM MODAL BAYBEE</h1>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CityPosts;