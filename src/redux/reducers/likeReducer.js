export const initialStateLike = {
  songLike: [],
};

export const likeReducer = (state = initialStateLike, action) => {
  switch (action.type) {
    case "ADD_SONGS_LIKE":
      return {
        ...state,
        songLike: [...state.songLike, action.payload],
      };

    case "REMOVE_SONGS_LIKE":
      return {
        ...state,
        songLike: state.songLike.filter((song, i) => i !== action.payload),
      };
    default:
      return state;
  }
};
