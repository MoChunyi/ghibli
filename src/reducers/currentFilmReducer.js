import produce from 'immer';
const currentFilmReducer = (state = {id: null, detailinfo: {}, detailimgs: [], titleshowimgs: null}, action) => {
    let newstate;
    switch (action.type) {
        case 'SET_CURRENT_FILM': {
            newstate = produce(state, draftState => {
                draftState.id = action.payload;
                draftState.detailimgs.length = 0;
            })
            return newstate;
        }
        case 'SET_CURRENT_FILM_DETAIL_INFO': {
            newstate = produce(state, draftState => {
                console.log(action.payload);
                draftState.detailinfo = action.payload;
            })
            return newstate;
        }
        case 'SET_DETAIL_IMAGS': {
            newstate = produce(state, draftState => {
                draftState.detailimgs.push(action.payload)
            })
            return newstate;
        }
        default: {
            return state;
        }
    }
}

export default currentFilmReducer;