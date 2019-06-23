import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {useTheme} from '@material-ui/core/styles'
import { Container, AppBar, Toolbar, Typography  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import clsx from 'clsx';
import bgimage from '../assets/images/totoro-white-background.jpg';
import totorologo from '../assets/images/totorologo.svg';
import totororun from '../assets/images/totoro-run.gif';
import titlelogo from '../assets/images/title-logo.svg';
import FetchFilmsInfo from '../containers/FetchFilmsInfo';
import GhibliRoutes from '../routes';
const useStyles = makeStyles(theme => ({
    appbar: {
        zIndex: 0,
        backgroundColor: 'transparent',
        boxShadow: "0 0 0 0"
    },
    appbarscroll: {
        backgroundColor: '#4dd0e1'
    },
    mainContainer: {
        padding: '0',
        margin: '0',
        width: '100%',
        maxWidth: 'none',
        maxHeight: 'none',
    },
    totorologo: {
        width: '64px',
        height: '64px',
    },
    title: {
        color: '#bdbdbd',
        position: 'relative',
        left: '50%',
        top: '50%',
        display: 'inline-block',
        transform: 'translate(-50%, -50%)',

    },
    dynamicimg: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    },
    titlelogo: {
        height: '64px'
    },
    routelink: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'weight'
    }
}))

const MainIndex = (props) => {
    const theme = useTheme();
    let trigger = useScrollTrigger({disableHysteresis: 'true', threshold: 500});
    const classes = useStyles();
    return (
        <Container style={{margin: 0, padding: 0, maxWidth: 'none'}}>
            <AppBar className={clsx({[classes.appbar]: !trigger, [classes.appbarscroll]: trigger})}  color="default">
                <Toolbar>
                    <Container style={{display: 'flex'}}>
                        <img src={totorologo} className={classes.totorologo} />
                        <img src={titlelogo} className={classes.titlelogo}/>
                        <Link to="/home"  className={classes.routelink}>
                            <Typography>
                                Home
                            </Typography>
                        </Link>
                        <Link to="/films" className={classes.routelink}>
                            <Typography>
                                Films
                            </Typography>
                        </Link>
                    </Container>
                </Toolbar>
            </AppBar>
            <Container className={classes.mainContainer}>       
                <GhibliRoutes></GhibliRoutes>
            </Container>
            
        </Container>
    )
}

export default MainIndex;