import React from 'react'
import AnimalCard from '../../widgets/AnimalCard/AnimalCard'


export default function AnimalsPage({animals}) {

  return (<>
    <div className="container mt-5">
        <h1 className="title has-text-centered">Животные нашего зоопарка</h1>
        <div className="columns is-multiline">
          {animals.map((animal) => (
            <div key={animal.id} className="column is-half">
              <AnimalCard animal={animal}  />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
