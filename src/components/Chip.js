import React from 'react'
import './style.css';
function Chip(props) {
  return (
    <div id='chip' className='mt-3'>
{props.title}
    </div>
  )
}

export default Chip