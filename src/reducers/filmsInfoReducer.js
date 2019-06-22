const initialState = {
    fetching: false,
    fetched: false,
    fetcherror: null,
    filmsInfo: []
}

const filmsInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILMSINFO_FETCHING": {
            console.log("feteching");
            return {...state, fetching: true}
           
        }
        case "FILMSINFO_FETCHED": {
            console.log("fetched");
            return {...state, fetched: true, filmsInfo: action.payload}
            
        }
        case "FILMSINFO_FAILED": {
            return {...state, fetcherror: true}
            
        }
        default: {
            return state;           
        }
    }
}

export default filmsInfoReducer;