import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import database from "./Firebase";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]) 
    
    // Es lo mismo que: // const people = []
    
    //Piece of code which runs based on a condition
    useEffect(() => {
        
        //this will run ONCE when the componen loadas, and never again
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    
    }, [people])


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