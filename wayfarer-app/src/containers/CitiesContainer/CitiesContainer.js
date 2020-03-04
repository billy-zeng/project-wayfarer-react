import React from 'react';
import Cities from '../../components/Cities/Cities';
import axios from 'axios';

class CitiesContainer extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts`)
      .then(res => {
        this.setState({
          cities: [res.data]
        });
      })
      .catch(err => console.log(err.response))
  }

  render() {
    return <Cities posts={[this.state.posts]}/>;
  }
}

export default CitiesContainer;