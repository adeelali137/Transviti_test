import React from 'react'
import img1 from '../assets/car2.png'
import img2 from '../assets/man2.png'
import img3 from '../assets/man.png'
import img4 from '../assets/car1.png'


export default function Photos() {
  return (
    <div className='userPhotos'>
        <div className="heading">
            <h6>Photos</h6>
            <a href="">View All</a>
        </div>
        <div className="pictures">
            <img src={img1} alt="test_img" />
            <img src={img2} alt="test_img" />
            <img src={img3} alt="test_img" />
            <img src={img4} alt="test_img" />
        </div>
    </div>
  )
}
