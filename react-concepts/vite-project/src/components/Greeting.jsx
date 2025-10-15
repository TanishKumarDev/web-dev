import React from 'react'

const Greeting = ({ isLoggedIn }) => {
  return (
    <h>
        <h1>
            {isLoggedIn ? 'Welcome back!' : 'Please sign up.'}
        </h1>
    </h>
  )
}

export default Greeting