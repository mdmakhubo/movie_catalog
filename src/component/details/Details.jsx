import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.scss'
import Navbar from '../navbar/Navbar';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c233b7142bf302fd2984e3c53c566913`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, overview, release_date, vote_average, vote_count, poster_path, backdrop_path } = movieDetails;

  return (
    <>
    <Navbar />
    <div className="d-container">
      <div className="details-container">
        <div className="image-container">
          {<img className="details-img" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} /> 
          ||
          <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={`${title} Backdrop`} />}
        </div>
        <div className="d-info-container">
          <h2>{title}</h2>
          <p>Overview: {overview}</p>
          <p>Release Date: {release_date}</p>
          <p>Vote Average: {vote_average}</p>
          <p>Vote Count: {vote_count}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Details;
