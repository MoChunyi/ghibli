import produce  from 'immer';
const filmsBriefInfoReducer = (state = [], action) => {
    let newstate;
    switch (action.type) {
        case 'GET_FILMS_BRIEF_INFO_ACTIONS': {
            // 不能直接对draftstate赋值。
            newstate = produce(state, draftState => {
                draftState.length=0;
                action.payload.map(item => draftState.push(item))
                
            })            
            return newstate;
        }
        default: {
            return state;
        }
    }
}

export default filmsBriefInfoReducer;