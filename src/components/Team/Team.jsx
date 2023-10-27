import React from 'react';
import avatar from '../../assets/avatar.jpg'
import '../Team/Team.scss';

export const Team = () => {
  return (
    <div className='team'>
        <h1>Our Team</h1>
        <div className='teamImg'>
            <img src={avatar} alt='avatar' />
            <img src={avatar} alt='avatar' />
            <img src={avatar} alt='avatar' />
            <img src={avatar} alt='avatar' />
        </div>
    </div>
  )
}
