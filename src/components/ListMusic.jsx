import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLikeSong } from "../redux/actions/action";

const ListMusic = ({ genre, artistName }) => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.artist.music[genre] || []);
  const likedSongs = useSelector((state) => state.artist.likedSongs || {});

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
        );
        if (response.ok) {
          const { data } = await response.json();
          dispatch({ type: "SET_MUSIC", genre, payload: data });
        } else {
          throw new Error("Error fetching songs");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMusic();
  }, [dispatch, genre, artistName]);

  const handleSelectSong = (song) => {
    dispatch(setCurrentSong(song));
    console.log('Selected Song:', song);
  };

  const handleToggleLike = (songId) => {
    dispatch(toggleLikeSong(songId));
  };

  // Limit to 4 songs per genre
  const limitedMusic = music.slice(0, 4);

  return (
    <div id={genre}>
      <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {limitedMusic.map((song) => (
          <div key={song.id} className="col text-center">
            <img 
              className="img-fluid" 
              src={song.album.cover_medium} 
              alt="track" 
              onClick={() => handleSelectSong(song)} 
            />
            <p>
              Track: "{song.title}"<br />
              Artist: {song.artist.name}
            </p>
            <div className="like-button">
              <button 
                className={`btn ${likedSongs[song.id] ? 'unlike' : 'like'}`} 
                onClick={() => handleToggleLike(song.id)}
              >
                {likedSongs[song.id] ? 'Unlike' : 'Like'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMusic;