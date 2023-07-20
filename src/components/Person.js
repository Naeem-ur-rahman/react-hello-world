import React from 'react'


// the HTML is written in this file and the person is passed form the NameList.js
function Person({person}) {
     return (
          <h2>
               ({person.id}): I am {person.name}, I am {person.age} Years old, a.k.a {person.heroName}
          </h2>
     )
}

export default Person
