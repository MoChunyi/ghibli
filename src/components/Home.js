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
        maxWidth: 'none',
        maxHeight: 'none',
    }
}))

const Home = (props) => {
    const classes = useStyles();
    const getImages = () => {
        let xhr = new XMLHttpRequest();
        let reader = new FileReader();
        for (let i = 0; i < 2; i++) {
            xhr.open("GET", "https://raw.githubusercontent.com/MoChunyi/mcydatabase/master/ghibli/datas/imgs/arrietty/1.jpg", true);
        xhr.responseType="blob";
        xhr.onloadend = function() {       
            console.log(this.response);
            reader.readAsDataURL(this.response)
        }
        reader.onloadend = function() {
            let divimage = document.getElementById("image");
            let image = new Image();
            image.height = 100;
            console.log(this);
            image.src = this.result;
            divimage.appendChild(image);
        }
        xhr.send();
        }
        
    }
    return (
        <Container className={classes.homecontainer}>
            <img style={{width: '100%'}} src={homebgimage}></img>
            <Button onClick={getImages}>
                getImages
            </Button>
            <div id='image'></div>
        </Container>
    )
}

export default Home;
