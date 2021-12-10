import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([

        {
            name: 'Mia Khalifa',
            url: 'https://es.web.img3.acsta.net/r_1280_720/pictures/17/01/20/12/42/192403.jpg'
        },
        {
            name: 'Lana Rhoades',
            url: 'https://horapiko.com/wp-content/uploads/2020/10/image-15.png'
        }


    ]) // Es lo mismo que: // const people = []



    // Mal
    // const people = []
    // people.push('Juan', 'Carlos')

    // Bien
    // setPeople([...people, 'Juan', 'Carlos'])
    
    return (
        <div>
            <div className='tinderCards__cardContainer'>
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}//Always use keys in React. Permite a React re-renderizar una lista de manera eficiente
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                        style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards