import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Footer } from './Components';




class ImageContainer extends Component {
  constructor(props) {
    super(props);
    const { allImages } = props;
    const activeRow = allImages.slice(0,5);
    this.state = {
      activeRow,
      id: 0,
      lastId: 0
    };
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
    const { activeRow, id, lastId } = this.state;
    const { allImages } = this.props;
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
    const { activeRow, id } = this.state;
    const { allImages } = this.props;
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
    return (
      <div>
      <div className="container">
        <button tabIndex="0" aria-label="prevous button" className="prevArrow" onClick={this.onClickPrev}/>
          {this.getImage()}
          <button tabIndex="0" aria-label="next button" className="nextArrow" onClick={this.onClickNext}/>
         </div>
        <Footer onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}/>
      </div>
    )

  }
}

ImageContainer.propTypes = {
  allImages: propTypes.object
}
export default ImageContainer;

