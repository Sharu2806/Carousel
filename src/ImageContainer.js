import React, { Component } from 'react';
import { Footer } from './Components'
import axios from 'axios';


class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allImages: [],
      id: 0,
      activeRow: [],
      lastId: 0
    };
  }

  componentDidMount() {
    const that = this;
    axios.get('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo')
    .then(function (response) {
      that.setState({allImages: response.data.hits}, () => {
        that.setState({activeRow: that.state.allImages.slice(0,5)});
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  getImage = () => {
    const { activeRow } = this.state;
    return activeRow.map((image) => {
        return (
            <div className="container-cell">
              <img src={image.webformatURL} alt="Sample images" />
              <p tabIndex="0" aria-label={image.tags} className="imgTitle">{image.tags}</p>
            </div>
        )
      });
  }

  onClickNext = () => {
    const { activeRow, allImages, id, lastId } = this.state;
    const length = allImages.length;
    const row = activeRow;
    row.shift();
    let index = 0;
    if (id !== (length -1)){
      index = id+1;
    } else {
      index = 0;
    }
    this.setState(() =>{
      allImages[index+5] ? row.push(allImages[index+5]) : row.push(allImages[lastId]);
      return {
        id: index,
        activeRow: row,
        lastId: allImages[index+5] ? 0 : (lastId+1)
      }
    });
  }

  onClickPrev = () => {
    const { activeRow, allImages, id } = this.state;
    const row = activeRow;
    let index = 0;
    row.pop();
    if (id > 0){
      index = id-1;
    } else {
      index = (allImages.length-1);
    }
    this.setState(() =>{
      row.unshift(allImages[index]);
      return {
      id: index,
      activeRow: row
    }
    });

  }

  render() {
    const { allImages } = this.state;
    const showImage = (allImages.length !== 0) ? this.getImage() : <div>Loading...</div>;
    return (
      <div>
      <div className="container">
        <button tabIndex="0" aria-label="prevous button" className="prevArrow" onClick={this.onClickPrev}/>
          {showImage}
          <button tabIndex="0" aria-label="next button" className="nextArrow" onClick={this.onClickNext}/>
         </div>
        <Footer onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}/>
      </div>
    )

  }
}

export default ImageContainer;
