import React from "react";
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IconButton from '@mui/material/IconButton';

function Header () {
    return (
        // BEM — Block Element Modifier 'naming convention' <<<<<
        <div className="header">
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            <img 
            className="header__logo" // BEM: componente en el que estas + __ + elemento <<<<<
            src="https://cdn2.iconfinder.com/data/icons/social-media-icons-23/800/tinder-512.png" 
            alt="tinder logo"
            />
            <IconButton>
            <QuestionAnswerIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
