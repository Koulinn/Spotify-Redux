export const actionSongLike = (song) => ({
  type: "ADD_SONGS_LIKE",
  payload: song,
});

export const actionSongRemove = (song) => ({
  type: "REMOVE_SONGS_LIKE",
  payload: song,
});
