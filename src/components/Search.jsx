import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListMusic from './ListMusic';

const SearchResults = () => {
  const { artistName } = useParams();
  const dispatch = useDispatch();
  const genre = 'rock'; 

  useEffect(() => {
    if (artistName) {
      const fetchMusic = async () => {
        try {
          const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
          if (response.ok) {
            const { data } = await response.json();
            dispatch({ type: 'SET_MUSIC', genre, payload: data });
          } else {
            throw new Error('Error fetching songs');
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchMusic();
    }
  }, [artistName, dispatch, genre]);

  return (
    <div>
      <h2 className="artist">{artistName}</h2>
      <ListMusic genre={genre} artistName={artistName} />
    </div>
  );
};

export default SearchResults;