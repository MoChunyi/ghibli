import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import bgimage from '../assets/images/totoro-white-background.jpg';
import totororun from '../assets/images/totoro-run.gif';
import FetchFilmsInfo from '../containers/FetchFilmsInfo';

const FilmsIndex = () => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Container 
                    style={{marginTop: '0px', backgroundImage: `url(${bgimage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', maxWidth:'none'}}
                >   <img src={totororun} className={"imgrun"}/>          
                    
                </Container>
                <Container style={{top: '-80px', zIndex: theme.zIndex.mobileStepper, position: 'relative'}}>
                    <FetchFilmsInfo/>
            </Container>
        </React.Fragment>
    )
}

export default FilmsIndex;