import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { connect } from "react-redux";
import { actionSongLike } from "../../actions/actionSongLike";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addSongLike: (songs) => dispatch(actionSongLike(songs)),
});

function TrackMusic(props) {
  //   console.log(props.addSongLike);
  const [heartIcon, setHeartIcon] = useState(true);
  const [clickHeart, setClickHeart] = useState(false);

  const clickHeartFun = (e) => {
    setClickHeart(!clickHeart);
  };
  return (
    <div
      //   onMouseOver={() => setHeartIcon(true)}
      //   onMouseOut={() => setHeartIcon(false)}
      className="row justify-content-between p-0 py-3 px-4 m-0 trackStats"
    >
      <div className="trackNumber d-flex justify-content-center align-items-center">
        <span className=" d-flex align-items-center justify-content-center modTranslate">
          {props.index + 1}
        </span>
      </div>
      <div className="col-md-5 col-8 trackName d-flex align-items-center">
        <img src={props.album.cover_small} alt="" />
        <div className="d-flex flex-column pl-3 tableMusicTitle ">
          <p className="text-truncate m-0 p-0">{props.track.title}</p>
          <span className="mod-font-size-small mod-text-colorFadedWhite m-0 p-0">
            {props.track.artist.name}
          </span>
        </div>
      </div>
      <div className="col trackAlbum d-none d-md-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
        {props.album.title}
      </div>
      <div className="col trackDateAdded d-none d-lg-flex justify-content-center align-items-center mod-font-size-small mod-text-colorFadedWhite">
        {props.track.rank}
      </div>
      <div className="col p-0 trackDuration d-flex justify-content-center align-items-center  mod-font-size-small mod-text-colorFadedWhite">
        {clickHeart ? (
          <AiFillHeart
            style={{
              color: "green",
              marginRight: "1.5rem",
              fontSize: "1.3rem",
              zIndex: "10px",
            }}
            // clickHeartFun &&
            onClick={() => props.addSongLike(props.track) && clickHeartFun()}
          />
        ) : (
          <AiOutlineHeart
            style={{
              color: "white",
              marginRight: "1.5rem",
              fontSize: "1.3rem",
              zIndex: "10px",
            }}
            // onClick={() => clickHeartFun()}
            // onClick={() => props.addSongLike(props.track)}
            onClick={() => props.addSongLike(props.track) && clickHeartFun()}
          />
        )}

        <span>
          {(props.track.duration / 60).toFixed() +
            ":" +
            (props.track.duration % 60)}
        </span>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackMusic);
