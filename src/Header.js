import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link, useHistory } from "react-router-dom";

function Header ({backButton}) {
    const history = useHistory()
    return (
        // BEM — Block Element Modifier 'naming convention' <<<<<
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosNewIcon fontSize="large" className="header__icon"/>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large"/>
                </IconButton>
            )}
            
            
            <Link to="/">
                <img 
                className="header__logo" // BEM: componente en el que estas + __ + elemento <<<<<
                src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png" 
                alt="tinder logo"
                />
            </Link>
                
            <Link to="/chat">
                <IconButton>
                <QuestionAnswerIcon className="header__icon" fontSize="large" />
                </IconButton>    
            </Link>
        </div>
    )
}

export default Header
