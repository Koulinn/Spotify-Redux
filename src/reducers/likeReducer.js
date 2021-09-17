export const initialStateLike = {
  songLike: [],
};

export const likeReducer = (state = initialStateLike, action) => {
  switch (action.type) {
    case "ADD_SONGS_LIKE":
      console.log(state, "STATE inside ADD_SONGS_LIKE");
      console.log(action, " ACTion inside ADD_SONGS_LIKE");
      return {
        ...state,
        songLike: [...state.songLike, action.payload],
      };

    case "REMOVE_SONGS_LIKE":
      return {};
    default:
      return state;
  }
};
