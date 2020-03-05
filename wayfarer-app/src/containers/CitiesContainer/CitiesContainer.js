import React from 'react';
import CityNav from '../../components/City/CityNav/CityNav';
import CityMain from '../../components/City/CityMain/CityMain';
import axios from 'axios';

class CitiesContainer extends React.Component {
  state = {
    currentCity: 1, // current city initialized as 1 == San Francisco
    cityPosts: []
  };

  updateCurrentCity = city => {
    this.setState({
      currentCity: city
    })
    this.getCityPosts();
  };

  getCityPosts() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/posts?cityCode=${this.state.currentCity}`)
    .then(res => {
      this.setState({
        cityPosts: res.data.data
      });
    })
    .catch(err => console.log(err.response))
  }

  // grab initial posts
  componentDidMount() {
    this.getCityPosts();
  };

  render() {
    console.log(this.state.cityPosts)
    return (
      <div className="container d-flex flex-row justify-content-center align-items-center">
        <CityNav currentCity={this.state.currentCity} updateCurrentCity={this.updateCurrentCity} />
        <CityMain currentCity={this.state.currentCity} posts={this.state.cityPosts} />
      </div>
    )
  }
}

export default CitiesContainer;
