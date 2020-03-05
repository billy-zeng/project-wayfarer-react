import React from 'react';
import axios from 'axios';
// import './ProfileForm.css';
// import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {

        state = {
                //this is going to be the info typed into a form, or info that is needed to create a post?  
                // post : {
                //         // title: '',
                //         // content: '',//this.props.content,
                //         city: ''//this.props.city,
                // }
                
        }

        handleChange = event => {
                this.setState({
                [event.target.name]: event.target.value
                });
        };
        
        handleSubmit = event => {
                event.preventDefault();
                axios
                .post(`${process.env.REACT_APP_API_URL}/posts`, this.state, {withCredentials: true})
                .then(res => {
                console.log(res);
                this.props.updateUser(res.data.data);
                this.props.history.push('/post');
                })
                .catch(err => console.log(err.response));
        };
        
        render() {
                console.log(this.state)
                return (

                
                <div className='container mt-4 mb-3'>
                <div className='row'>
                <div className='col-md-8 offset-md-2'>
                        <h4 className='mb-3'>Make a post</h4>
                        <form onSubmit={this.handleSubmit}>

                        <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cities
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item" type="button" value="1" onChange={this.handleChange}>San Francisco</button>
                                        <button className="dropdown-item" type="button" value="2" onChange={this.handleChange}>London</button>
                                </div>
                        </div>


                        <div className='form-group'>
                        <label htmlFor='title'></label>
                        <textarea 
                        onChange={this.handleChange}
                        className='form-control form-control-lg'
                        type='text'
                        id='title'
                        name='title'


                        value={this.state.title}
                        >My Title</textarea>
                        </div>


                        <div className="form-group">
                                <label for="comment"></label>
                                
                                <textarea className="form-control" rows="5" onChange={this.handleChange} className='form-control form-control-lg' type='text' id='content' name='content' value={this.state.content}>What did I experience?</textarea>
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
        }
}    
export default PostForm;

// export default withRouter(PostForm);


