import React from 'react'

const Notify = ({ hasNotification }) => {
  return (
    <div>
        {hasNotification ? <p>You have new notifications!</p> : <p>No new notifications.</p>}
    </div>
  )
}

export default Notify
