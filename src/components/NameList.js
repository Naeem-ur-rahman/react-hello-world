import React from 'react';
import Person from './Person';

function NameList() {
     const persons = [
          {
               id: 1,
               name: 'Bruce',
               age: 30,
               heroName: 'Batman'
          },
          {
               id: 2,
               name: 'Clark',
               age: 25,
               heroName: 'Superman'
          },
          {
               id: 3,
               name: 'Diana',
               age: 23,
               heroName: 'WonderWoman'
          },
          {
               id: 4,
               name: 'Jack',
               age: 20,
               heroName: 'Robin'
          }
     ]

     // key should be unique on passing
     // key prop is not rendered it is reserved
     // with out key all list are mached and rendered and there is problem in it
     // with key prop its easy to match the list.
     const personList = persons.map(person => <Person key={person.id} person={person} />);
     return <div>{personList}</div>


     // const names = ['Bruce', 'Clark', 'Diana'];
     // const NameList = names.map((name, index) => <h2 key={index}>{index}--{name}</h2>);
     // return <div>{NameList}</div>

     // this index as key is risky in complex problem
     // only use index as if list is static or rendered onces
     // otherwise use uniquie id as key

}

export default NameList