import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';

function MovieItem({ item }) {

    const truncateOverview = (overview, maxLength) => {
        if (overview.length > maxLength) {
          return overview.substring(0, maxLength) + '...';
        }
        return overview;
      };

  return (
    <div className="movieItem">
      <Link to={`/details/${item.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
      </Link>
      <div className="info">
        <span className="desc">{item.title || truncateOverview(item.name, 20)}</span>
      </div>
    </div>
  );
}

export default MovieItem;
