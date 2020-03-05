import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  state = {
    cityCode: this.props.formMethod == 'edit' ? this.props.postData.cityCode : '',
    title: this.props.formMethod == 'edit' ? this.props.postData.title : '',
    content: this.props.formMethod == 'edit' ? this.props.postData.content : '',
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ 
      [event.target.name]: event.target.value
    });
  };
  
  handleSubmitCreate = event => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/posts`, this.state, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.props.updatePosts();
        this.props.handleClose();
      })
      .catch(err => console.log(err.response));
  };

  handleSubmitEdit = event => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/posts/${this.props.postData._id}`, this.state, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.props.updatePosts();
        this.props.handleClose();
      })
      .catch(err => console.log(err.response));
  };
  
  render() {
    console.log(this.state)
    return (
      <div className='container mt-4 mb-3'>
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <form onSubmit={this.props.formMethod == 'edit' ? this.handleSubmitEdit : this.handleSubmitCreate}>
              <div className='form-group'>
                <select defaultValue={this.state.cityCode} name="cityCode" onChange={this.handleChange}>
                  <option value="N/A"> Select a city</option>
                  <option value={1}>San Francisco</option>
                  <option value={2}>London</option>
                  <option value={3}>Gibraltar</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <textarea onChange={this.handleChange} className='form-control form-control-lg' type='text' id='title' value={this.state.title} name='title' placeholder="Title" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" onChange={this.handleChange} className='form-control form-control-lg' type='text' id='content' name='content' value={this.state.content} placeholder="What did I experience?" />
              </div>
              <div className='button-wrapper'>
                <button className='btn btn-primary' type='submit'>
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
    );
  };
}   

export default withRouter(PostForm);
