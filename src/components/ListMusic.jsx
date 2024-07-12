import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListMusic = ({ genre, artistName }) => {
  const dispatch = useDispatch();

  // Directly access the music for the given genre
  const music = useSelector((state) => state.artist.music[genre] || []);

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

  return (
    <div id={genre}>
      <h2>{genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {music.map((song) => (
          <div key={song.id} className="col text-center">
            <img className="img-fluid" src={song.album.cover_medium} alt="track" />
            <p>
              Track: "{song.title}"<br />
              Artist: {song.artist.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMusic;