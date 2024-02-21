import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InfoOutlined } from '@mui/icons-material';
import './Showcase.scss';

function Showcase({ latest }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const truncateOverview = (overview, maxLength) => {
    if (overview.length > maxLength) {
      return overview.substring(0, maxLength) + '...';
    }
    return overview;
  };

  return (
    <div className="showcase max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <Slider {...settings}>
        {latest.map((item, index) => (
          <div key={index}>
            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt={item.title} />
            <div className="info">
              <div className="more">
                <InfoOutlined className='infoOutlined' />
                <span>Info</span>
              </div>
              <h4>{item.title}</h4>
              <p>{truncateOverview(item.overview, 130)}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Showcase;
