import React from 'react'
import "./LoadingStyle.scss";

const Loading: React.FC = () => {
  return (
    <div className='loading-section'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading