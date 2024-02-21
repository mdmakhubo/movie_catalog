import React, { useState, useRef } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import MovieItem from '../movieItem/MovieItem';
import './Movie.scss';

function Movie({ movies }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  // eslint-disable-next-line
  const [clickLimit, setClickLimit] = useState(5);

  const listRef = useRef();

  const handleTransitionEnd = () => {
    setIsMoved(false);
  };
  const handleClick = (direction) => {
    setIsMoved(true);
  
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    }
  
    if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);
    }
  };
  

  const containerStyle = {
    transform: `translateX(-${slideNumber * 10.5}%)`,
    transition: isMoved ? 'transform 0.5s ease-in-out' : 'none',
  };

  return (
    <div className="list">
      <div className="wrapper">
         <span className="listTitle">Movies</span>
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && slideNumber === 0 && "none" }}
        />
        <div
          className="m-container"
          ref={listRef}
          onTransitionEnd={handleTransitionEnd}
          style={containerStyle}
        >
          {movies.map((item, i) => (
            <MovieItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: !isMoved && slideNumber === movies.length - 1 && "none" }}
        />
      </div>
    </div>
  );
}

export default Movie;
