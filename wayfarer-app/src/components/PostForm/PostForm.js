import React from 'react';
import axios from 'axios';
// import './ProfileForm.css';
// import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {

        state = {
                city:'',
                title:'',
                comment:'',
        };


        handleChange = event => {

                console.log(event.target.value);

               this.setState({ 
                       [event.target.name]: event.target.value
               });
        };
        
        handleSubmit = event => {
               
                axios
                .post(`${process.env.REACT_APP_API_URL}/posts`, this.state, {withCredentials: true})
                .then(res => {
                console.log(res);
                this.props.updateUser(res.data.data);
                this.props.history.push('/post');
                })
                .catch(err => console.log(err.response));

                // moved this down here:  
                event.preventDefault();
        };
        
        render() {
                console.log(this.state)
                return (

                
                <div className='container mt-4 mb-3'>
                <div className='row'>
                <div className='col-md-8 offset-md-2'>
                        <h4 className='mb-3'>Make a post</h4>
                        <form onSubmit={this.handleSubmit}>

                        <div>
                        <select defaultValue={this.state.city} name="city" onChange={this.handleChange}>
                                <option value="N/A"> Select a city</option>
                                <option value="London">London</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="San Francisco">San Francisco</option>
                        </select>
                        </div>



                        <div className='form-group'>

                                <label htmlFor='title'>

                                </label>

                                <textarea onChange={this.handleChange} className='form-control form-control-lg' type='text'
                                id='title' 
                                value={this.state.title} name='title' 
                                placeholder="Title">
                                <p>TITLE HERE</p>
                                
                                </textarea>

                        </div>


                        <div className="form-group">
                                <label for="comment"></label>
                                
                                <textarea className="form-control" rows="5" onChange={this.handleChange} className='form-control form-control-lg' type='text' id='content' name='content' value={this.state.content} placeholder="What did I experience?"></textarea>
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
export default PostForm;

// export default withRouter(PostForm);


