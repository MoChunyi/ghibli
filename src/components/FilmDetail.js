import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils'
import actions from '../actions/currentFilmActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FetchImagesByRUL from '../utils/FetchImagesByRUL'
const useStyles = makeStyles(theme => ({
    rootContainer: {
        padding: '0',
        margin: '0',
        width: '100%',
        maxWidth: 'none',
        maxHeight: 'none',
    },
    detailimg: {
        width: "100%"
    },
    title: {
        position: 'absolute',
        marginTop: '100px',
        zIndex: 1100,
        backgroundColor: '#27210e',
        color: 'white',
        height: '32px',
        lineHeight: '32px'
    }
}));

const mapStateToProps = (state) => ({
    detailinfo: Object.keys(state.currentFilmReducer.detailinfo).length > 0?state.currentFilmReducer.detailinfo.data.result:null,
    detailimgs: state.currentFilmReducer.detailimgs
})

const mapDispatchToProps = (dispatch) => ({
    fetchCurrentFilmDetailInfo: (url) => {
        return dispatch(actions.fetchCurrentFilmDetailInfo(url));
    },
    setCurrentFilmID: (id) => {dispatch(actions.setCurrentFilmID(id))},
    setDetailImags: () => {
        dispatch(actions.setDetailImags());
    }
})

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const FilmDetail = (props) => {
    useEffect(() => {
        let queryString = window.location.search;
        let params = new URLSearchParams(queryString);
        let id = Number(params.get("id"));
        props.setCurrentFilmID(id)
        let url = `https://www.easy-mock.com/mock/5d0edce1e515aa4c2cc4adc6/ghibli/filmitem?id=${id}`;
        props.fetchCurrentFilmDetailInfo(url).then(function() {
            props.setDetailImags();
        });
    }, [(new URLSearchParams(window.location.search)).get("id")])

    const classes = useStyles();
    return (
        <Container className={classes.rootContainer}>
            {
                props.detailinfo && 
                <Typography className={classes.title}>
                    {
                        props.detailinfo.title
                    }
                </Typography>
            }
            <Container className={classes.rootContainer}>
                {
                    props.detailimgs.length > 0 && 
                    <AutoPlaySwipeableViews>
                        {
                            props.detailimgs.map((imgsrc, index) => {
                                return  <img key={index} src={imgsrc} className={classes.detailimg}/>
                            })
                        }
                    </AutoPlaySwipeableViews>
                    
                }
            </Container>
            <Container>
                {
                    props.detailinfo && 
                    <Grid container>
                        <Grid item lg={3} md={3} sm={3}>1</Grid>
                        <Grid item lg={9} md={9} sm={9}>
                            <Typography>
                                <label>片名：</label>{props.detailinfo.title}
                            </Typography>
                            <Typography>
                                <label>导演：</label>{props.detailinfo.director}
                            </Typography>
                            <Typography>
                                <label>出品日期：</label>{props.detailinfo.release_date}
                            </Typography>
                            <Typography>
                                <label>简介：</label><br/>
                                {
                                    props.detailinfo.description.map(message => {
                                        return (
                                            <Typography>{message}</Typography>
                                        )
                                    })
                                }
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Container>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);