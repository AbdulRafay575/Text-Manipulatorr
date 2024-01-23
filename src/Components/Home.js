import React from 'react'

export default function Home(props) {
  return (
    <>
    <div className='container mt-5 pt-5'>
      <h1>{props.mode}</h1>
    </div>
    </>
  )
}
