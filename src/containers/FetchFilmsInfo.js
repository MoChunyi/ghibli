import React from 'react';
import {connect} from 'react-redux';

import FilmsInfo from '../components/FilmsInfo';
import actions from '../actions/filmsInfoActions';

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        filmsinfo: state.filmsInfoReducer.filmsInfo,
    })   
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSendRequest: () => {
        dispatch(actions.fetching)
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);
        xhr.onloadend = function() {
            console.log(this);
            if (this.status === 200) {
                dispatch(actions.fetched(JSON.parse(this.response)));
                console.log(ownProps);
            } else {
                dispatch(actions.fetcherror)
            }
        }
        xhr.send();
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsInfo);