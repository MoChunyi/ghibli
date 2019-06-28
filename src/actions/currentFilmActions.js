import FetchImagesByRUL from '../utils/FetchImagesByRUL'
const currentFilmAtions = {
    setCurrentFilmID: (id) => ({
        type: 'SET_CURRENT_FILM',
        payload: id
    }),

    fetchCurrentFilmDetailInfo: (url) => {
        return  (dispatch) => { 
            return fetch(url).then(function(response){
                        if (response.status === 200) {
                            return response.json();
                        }    
                    }).then(function(data){
                        console.log(data);
                        dispatch({
                            type: 'SET_CURRENT_FILM_DETAIL_INFO',
                            payload: data
                        })
                    })
        }
    },
    setDetailImags: (urls) => {
        return function(dispatch, getState) {
            let urls = getState().currentFilmReducer.detailinfo.data.result.imgs.detailimgs;
            console.log(urls);
            urls.map(url => {
                FetchImagesByRUL(url).then(function(imgsrc){
                    if (imgsrc != null) {
                        dispatch({
                            type: 'SET_DETAIL_IMAGS',
                            payload: imgsrc
                        })
                    }
                    
                })
            })
        }        
    }
}

export default currentFilmAtions;