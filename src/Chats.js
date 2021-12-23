import React from "react";
import Chat from "./Chat.js"
import './Chats.css'

function Chats () {
    return (
        <div className="chats">
            <Chat
                name='Megan Fox'
                message='YO whats up'
                timestamp='40 seconds ago'
                profilePic='https://assets.cdn.moviepilot.de/files/9d9731d0ca1fcc6512796da0d884811baac195cdfcecd5f9635afaacc4c5/fill/992/477/megan-fox.jpg'
            /> 
            <Chat
                name='Mark Z'
                message='YO whats up'
                timestamp='40 seconds ago'
                profilePic='...'
            /> 
            <Chat
                name='Mark B'
                message='YO whats up'
                timestamp='40 seconds ago'
                profilePic='...'
            /> 
            <Chat
                name='Mark V'
                message='YO whats up'
                timestamp='40 seconds ago'
                profilePic='...'
            /> 
        </div>
    )
}

export default Chats