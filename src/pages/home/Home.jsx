import React, { useState, useEffect } from 'react';
import Movies from '../../component/movie/Movie';
import Showcase from '../../component/showcase/Showcase';
import Serie from '../../component/serie/Serie';
import Popular from '../../component/popular/Popular';
import Navbar from '../../component/navbar/Navbar';
import './Home.scss';

const fetchData = async (url, setterFunction) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setterFunction(data.results);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
  }
};

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [SerieList, setSerieList] = useState([]);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetchData(
      'https://api.themoviedb.org/3/discover/movie?api_key=c233b7142bf302fd2984e3c53c566913',
      setMovieList
    );
    fetchData(
      'https://api.themoviedb.org/3/movie/popular?api_key=c233b7142bf302fd2984e3c53c566913',
      setLatestList
    );
    fetchData(
      'https://api.themoviedb.org/3/discover/tv?api_key=c233b7142bf302fd2984e3c53c566913',
      setSerieList
    );
    fetchData(
      'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c233b7142bf302fd2984e3c53c566913',
      setPopularList
    );
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <Showcase latest={latestList} />
      <Movies movies={movieList} />
      <Serie serie={SerieList} />
      <Popular popular={popularList} />
    </div>
  );
}

export default Home;
