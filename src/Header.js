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
            src="https://cdn-icons.flaticon.com/png/512/4401/premium/4401438.png?token=exp=1639065741~hmac=cca7b61ff75e9091c9afc22d6b25d3a9" 
            alt="tinder logo"
            />
            <IconButton>
            <QuestionAnswerIcon className="header__icon" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header
