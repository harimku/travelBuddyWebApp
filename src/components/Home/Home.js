import React from 'react'
import '../../App.css'
import Card from '../Card/Card'
import { locations } from '../../Types/Locations'


export default function Home({ searchResults }) {
  const filteredLocations = searchResults.length > 0 ? searchResults : locations
  return (
    <div>
      <div>
        {filteredLocations.map((data, idx) => (
          data.message ? (
            <div key={idx} className="No Results Found">{data.message}</div>
          ) : (
            <Card key={idx} data={data} />
          )
        ))}
      </div>
    </div>
  )
}