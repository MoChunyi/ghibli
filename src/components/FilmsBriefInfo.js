import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Collapse from '@material-ui/core/Collapse';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import actions from '../actions/filmsBriefInfoActions'
import totorologo from '../assets/images/totorologo.svg';
const useStyles = makeStyles(theme => ({
    totorologo: {
        width: '64px',
        height: '64px',
        cursor: 'pointer'
    }, 
    titlelogo: {
        height: '64px'
    },
    briefInfo: {
        background: 'rgba(255,255,255,0.5)',
        padding: "5px 0 0 10px",
    },
    linediv: {
        height: 30,
        borderLeft: 'solid',
        marginLeft: 20,
        margin: '2px'
    },
    orderdiv: {
        width:'40px',
        height: '40px',
        borderRadius: '50px',
        backgroundColor: '#03a9f4',
        lineHeight: '40px',
    }
}))

const mapStateToProps = (state) => ({
    filmsbriefinfo: state.filmsBriefInfoReducer?state.filmsBriefInfoReducer:[]
})

const mapDispatchToProps = (dispatch) => ({
    fetchFilmsBriefInfo: (url) => {
        dispatch(actions.fetchFilmsBriefInfo(url));
    }
})

const FilmsBriefInfo = (props) => {
    useEffect(()=> {
        props.fetchFilmsBriefInfo('https://www.easy-mock.com/mock/5d0edce1e515aa4c2cc4adc6/ghibli/films/briefinfos');
    }, []);
    const [open, setOpen] = React.useState(false);
    function handleChange() {
        setOpen(prev => !prev);
    }   
    const classes = useStyles();
    return (
        <div style={{display: 'inline-block', position:'absolute'}}>
            <img src={totorologo} className={classes.totorologo} onClick={handleChange} />
            <div style={{height: 600, overflow: 'auto'}}>
                <Collapse className={classes.briefInfo} in={open} onMouseLeave={handleChange}>
                    {props.filmsbriefinfo.map((item, index) => {
                        if (index < props.filmsbriefinfo.length - 1) {
                            return (
                                <div key={item.id} >
                                    <Link to={`filmdetail?id=${item.id}`} style={{textDecoration: 'none', cursor: 'pointer'}}>
                                        <div style={{width: '260px'}}>
                                            <span style={{display: 'flex', alignItems: 'center'}}>
                                                <span style={{display: 'flex', }}>
                                                    <div className={classes.orderdiv}>
                                                        {item.time}
                                                    </div>
                                                </span>
                                                <span style={{display: 'flex', width: '100%', fontSize: '18px', marginLeft: '5px', color: 'black'}}>{item.title}</span>
                                            </span>
                                        </div>
                                    </Link> 
                                    <div className={classes.linediv}></div>   
                                </div>
                            )
                            
                        } else {
                            return (
                                <div key={item.id}>
                                     <Link to={`filmdetail?id=${item.id}`} style={{textDecoration: 'none', cursor: 'pointer'}}>
                                        <div style={{width: '260px'}}>
                                            <span style={{display: 'flex', alignItems: 'center'}}>
                                                <span style={{display: 'flex', }}>
                                                    <div className={classes.orderdiv}>
                                                        {item.time}
                                                    </div>
                                                </span>
                                                <span style={{display: 'flex', width: '100%', fontSize: '18px', marginLeft: '5px', color: 'black'}}>{item.title}</span>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </Collapse>    
            </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(FilmsBriefInfo);