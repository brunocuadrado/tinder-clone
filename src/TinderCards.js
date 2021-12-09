import React, { useState } from "react";

function TinderCards() {
    const [people, setPeople] = useState([

        {
            name: 'Steve Jobs',
            url: ''
        },
        {
            name: 'Mark Zuckerberg',
            url: ''
        }


    ]) // Es lo mismo que: // const people = []



    // Mal
    // const people = []
    // people.push('Juan', 'Carlos')

    // Bien
    // setPeople([...people, 'Juan', 'Carlos'])
    
    return (
        <div>
            <h1>TinderCards</h1>
        </div>
    )
}

export default TinderCards