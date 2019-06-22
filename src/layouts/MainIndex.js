import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {useTheme} from '@material-ui/core/styles'
import { Container, AppBar, Toolbar, Typography  } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import clsx from 'clsx';
import bgimage from '../assets/images/totoro-white-background.jpg';
import totorologo from '../assets/images/totorologo.svg';
import totororun from '../assets/images/totoro-run.gif';
import titlelogo from '../assets/images/title-logo.svg';
import FetchFilmsInfo from '../containers/FetchFilmsInfo';
const useStyles = makeStyles(theme => ({
    appbar: {
        zIndex: 0,
        backgroundColor: 'transparent',
        boxShadow: "0 0 0 0"
    },
    appbarscroll: {
        backgroundColor: '#4dd0e1'
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
    }
}))

const MainIndex = (props) => {
    const theme = useTheme();
    let trigger = useScrollTrigger({disableHysteresis: 'true', threshold: 10});
    const classes = useStyles();
    return (
        <Container style={{margin: 0, padding: 0, maxWidth: 'none'}}>
            <AppBar className={clsx({[classes.appbar]: !trigger, [classes.appbarscroll]: trigger})}  color="default">
                <Toolbar>
                    <Container>
                        <img src={totorologo} className={classes.totorologo} />
                        <img src={titlelogo} className={classes.titlelogo}/>
                    </Container>
                </Toolbar>
            </AppBar>
            <Container 
                style={{marginTop: '0px', backgroundImage: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', maxWidth:'none'}}
            >   <img src={totororun} className={"imgrun"}/>          
                
            </Container>
            <Container style={{top: '-80px', zIndex: theme.zIndex.mobileStepper, position: 'relative'}}>
                <FetchFilmsInfo />
            </Container>
        </Container>
    )
}

export default MainIndex;