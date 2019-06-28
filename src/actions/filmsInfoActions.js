export default  {
    fetching:  {
        type: "FILMSINFO_FETCHING"
    },
    fetched: (filmsinfo) => ({
        type: "FILMSINFO_FETCHED",
        payload: filmsinfo
    }),
    fetcherror: {
        type: "FILMSINFO_FAILED"
    },
    // fetchWithThunk: function() {
    //     return function(dispatch, getState) {
    //         console.log(getState())
    //     }
    // }
}