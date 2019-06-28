import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Button, } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import { isTSEnumMember } from '@babel/types';

const useStyles = makeStyles(theme => ({
    gridroot: {
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: theme.shadows[15],
        padding: '16px 8px'
    },
    card: {
        boxShadow: theme.shadows[5],
        '& div': {
            height: "100%",
            padding: '0',
            '& h5': {
                textAlign: 'center',
                width: '100%',
                height: '20%'
            },
            '& p': {
                height: "80%",
                overflowY: "scroll",
                
            } 
        },
        height: '200px'
    },
    cardcontent: {
        textAlign: 'center'
    },
    cardtitle: {
        backgroundImage: 'linear-gradient(120deg, #fbc2eb 0%, #a6c1ee 100%)'
    }
}))

const FilmsInfo = (props) => {
    useEffect(() => {
        props.onSendRequest();
    },[])
    const classes = useStyles();
    const [sendbtngridvisiable, setSendbtngridvisiable] = useState(true);
    return (
        <Grid container spacing={3} className={classes.gridroot} justify={'center'}>
            {console.log(props)}
            {
                props.filmsinfo.length > 0 && props.filmsinfo.map(item => {
                    let url = item.imgs.titleshowurl;
                    console.log(url)
                    console.log("url", url)
                    let xhr = new XMLHttpRequest();
                    let reader = new FileReader();
                    let img = document.createElement("img")
                    img.style.width="100%";
                    img.style.height="400px";
                    img.style.cursor="pointer"
                    let id = item.id;
                    xhr.open("GET", url, true);
                    xhr.responseType="blob";
                    xhr.onloadend = function() {
                        console.log("this",this);
                        if (this.status === 200) {
                            reader.readAsDataURL(this.response);
                        }
                    }
                    reader.onloadend = function() {
                        img.src = this.result;
                        document.getElementById(`${item.id}`).appendChild(img);

                    }
                    xhr.send();
                    return (
                        
                        <Grid  key={`${item.id}`} item xs={6} sm={4} md={3} style={{overflow: 'hidden'}}>
                            <Link to={`filmdetail?id=${item.id}`} id={`${item.id}`}>
                            </Link>
                        </Grid>                    
                    )
                })
            }
            
            {/* <Grid  item xs={8} sm={6} md={4} justify={"center"} style={{display: 'flex'}}>
                <Button id="sendbtn" variant="contained" onClick={props.onSendRequest}>
                    SEND
                </Button>
            </Grid> */}
            {/* 用thunk 请求 */}
            {/* <Grid  item xs={8} sm={6} md={4} justify={"center"} style={{display: 'flex'}}>
                <Button id="sendbtn" variant="contained" onClick={props.onSendRequestWithThunk}>
                    SENDWITHTHUNK
                </Button>
            </Grid> */}
            
        </Grid>
    )
}

FilmsInfo.propTypes = {
    filmsinfo: PropTypes.array.isRequired,
    onSendRequest: PropTypes.func.isRequired
}
export default FilmsInfo;