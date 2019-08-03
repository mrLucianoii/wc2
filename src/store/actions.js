const isLoading = () => (dispatch) => {
  dispatch({
    type: 'MOVIE_FINISHED',
  });
}; 

export default {
 isLoading,
};
