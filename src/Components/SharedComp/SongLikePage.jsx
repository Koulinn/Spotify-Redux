import React from "react";
import TrackMusic from "./TrackMusic";
import { connect } from "react-redux";
const mapStateToProps = (props) => props;
// {<TrackMusic />}
function SongLikePage(props) {
  console.log(props);
  return (
    <div>
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae
      totam omnis, perspiciatis animi assumenda quasi. Blanditiis quis
      laboriosam, nihil earum voluptatum quo fugiat iste modi maiores pariatur
      impedit perferendis?
    </div>
  );
}

export default connect(mapStateToProps)(SongLikePage);
