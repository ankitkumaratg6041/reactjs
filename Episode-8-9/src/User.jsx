import React from 'react'

const User = ({name}) => {
  return (
    <div className='user-card'>
          <h2>{name}</h2>      
          <h3>Location: Lethbridge, AB</h3>
          <h4>Contact: @grim_reapr_</h4>
    </div>
  )
}

export default User