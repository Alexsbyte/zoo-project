import React from 'react'
import AnimalCard from '../../widgets/AnimalCard/AnimalCard'
import AnimalCreatedForm from '../../widgets/AnimalForm/AnimalCreatedForm'
import AnimalEditCard from '../../widgets/AnimalEditCard/AnimalEditCard'

export default function AnimalEditPage({animals}) {
    
  return (

    <div className="container mt-5">
            <h1 className="title has-text-centered">Старница редактирование животных</h1>
            <AnimalCreatedForm animals={animals} />
           <div className="container mt-5">
                  <div className="columns is-multiline">
                    {animals.map((animal) => (
                      <div key={animal.id} className="column is-half">
                        <AnimalEditCard animals={animal}  />
                      </div>
                    ))}
                  </div>
                </div>
                </div>
  
  )
}
