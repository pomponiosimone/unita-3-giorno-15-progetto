import React from 'react';
import { useSelector } from 'react-redux';
import shuffle from '../assets/playerbuttons/shuffle.png';
import prev from '../assets/playerbuttons/prev.png';
import play from '../assets/playerbuttons/play.png';
import next from '../assets/playerbuttons/next.png';
import repeat from '../assets/playerbuttons/repeat.png';

const Player = () => {
  const currentSong = useSelector((state) => state.currentSong);
  console.log('Current Song:', currentSong);  
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
          {currentSong ? (
  <div className="current-song-details">
    <p className="text-light">{currentSong.title} by {currentSong.artist.name}</p>
    <img src={currentSong.album.cover_medium} alt="album cover" />
  </div>
) : (
  <p className="text-light">No song selected</p>
)}
              
            
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;