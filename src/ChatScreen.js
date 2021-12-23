import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './ChatScreen.css'

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Megan',
            image: 'https://assets.cdn.moviepilot.de/files/9d9731d0ca1fcc6512796da0d884811baac195cdfcecd5f9635afaacc4c5/fill/992/477/megan-fox.jpg',
            message: 'Whats up babe'
        },
        {
            name: 'Megan',
            image: 'https://assets.cdn.moviepilot.de/files/9d9731d0ca1fcc6512796da0d884811baac195cdfcecd5f9635afaacc4c5/fill/992/477/megan-fox.jpg',
            message: 'Lets go for a drink LOL'
        },
        {
            message: 'No puedo tengo fulbo'
        }
    ]);

    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, {message: input }])
        setInput('') //reset state
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>matcheaste con esta persona hace una baaanda</p>
            {messages.map((message) => 
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>    
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                ) 
            )}

            <form className='chatScreen__input'>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    placeholder="Type a message..." 
                    type="text" 
                />
                <button onClick={handleSend} className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen
