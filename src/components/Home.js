import React, {} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import homebgimage from '../assets/images/homeimage.jpg';
const useStyles = makeStyles(theme => ({
    homecontainer: {
        padding: "0 0 0 0",
        margin: '0',
        width: '100%',
        height: '800px',
        maxWidth: 'none',
        maxHeight: 'none',
        backgroundImage: `url(${homebgimage})`,
        backgroundSize:'cover'
    }
}))

const Home = (props) => {
    const classes = useStyles();
    return (
        <Container className={classes.homecontainer}>
            {/* <img style={{width: '100%', backgroundSize:'cover'}} src={homebgimage}></img> */}
        </Container>
    )
}

export default Home;
