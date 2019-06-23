import React from 'react';
import {connect} from 'react-redux';

import FilmsInfo from '../components/FilmsInfo';
import actions from '../actions/filmsInfoActions';

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        filmsinfo: state.filmsInfoReducer.filmsInfo.data || [],
    })   
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSendRequest: () => {
        dispatch(actions.fetching)
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://www.easy-mock.com/mock/5d0edce1e515aa4c2cc4adc6/ghibli/films", true);
        xhr.onloadend = function() {
            console.log(this);
            if (this.status === 200) {
                dispatch(actions.fetched(JSON.parse(this.response)));
            } else {
                dispatch(actions.fetcherror)
            }
        }
        xhr.send();
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsInfo);