import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <main className='main'>
      <h2 className='main-heading'>You got the travel plans, we got the travel vans.</h2>
      <p className='main-paragraph'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to="vans" className='main-button'>Find your van</Link>
    </main>
    </div>
  )
}
