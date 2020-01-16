import React, { Component }  from 'react';
import { Header } from './Components'
import ImageContainer from './ImageContainer';
import './Home.css';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allImages: []
    };
  }

  componentDidMount() {
    const that = this;
    axios.get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo')
    .then(function (response) {
      that.setState(() => ({allImages: response.data.hits}));
    }).catch(function (error) {
      console.log(error);
    });
  }


  render() {
    const { allImages } = this.state;
    return (
      <div className="App">
        <Header />
        {(allImages.length > 0) && <ImageContainer allImages={allImages} />}
      </div>
    );
  }
}


export default Home;
