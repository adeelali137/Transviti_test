import React from 'react'
import dp from '../assets/dp.png'
import icon from '../assets/icon.png'

export default function NewPost() {
  return (
    <div className='postSomething'>
        <div className="postStuff">
            <img src={dp} alt="test_img" />
            <p>Post Something...</p>
        </div>
        <div className="uploadStuff">
            <img src={icon} alt="test_img" />
        </div>
    </div>
  )
}
