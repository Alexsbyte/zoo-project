import React from 'react'
import AnimalCard from '../../widgets/AnimalCard/AnimalCard'

export default function AnimalsPage() {
    const mockData = [
        { id: 1, title: "Tiger", description: "Big animal" },
    { id: 2, title: "Lion", description: "King of the jungle" },
    { id: 3, title: "Elephant", description: "Largest land animal" },
    { id: 4, title: "Giraffe", description: "Tallest animal" },
    ]
  return (<>
    <div className="container mt-5">
        <h1 className="title has-text-centered">Animals</h1>
        <div className="columns is-multiline">
          {mockData.map((animal) => (
            <div key={animal.id} className="column is-half">
              <AnimalCard animal={animal} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
