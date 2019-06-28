const filmsBriefInfoActions = {
    setFilmsBriefInfo: (briefInfo) => ({
        type: 'GET_FILMS_BRIEF_INFO_ACTIONS',
        payload: briefInfo
    }),
    fetchFilmsBriefInfo: function(url) {
        return function(dispatch, getState) {
            fetch(url).then(function(response){
                return (response.json());
            }).then(function(data){
                console.log(data.data.result);
                dispatch({
                    type: 'GET_FILMS_BRIEF_INFO_ACTIONS',
                    payload: data.data.result
                })
            })
        }
    }
}
export default filmsBriefInfoActions;