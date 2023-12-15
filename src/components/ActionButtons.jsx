import React from 'react'
import ring from '../assets/Layer 1 1.png'
import add from '../assets/Group 339 1.png'
import msg from '../assets/Homepage - Login - Top Nav Bar - Inbox Icon 1.png'
import dp from '../assets/dp.png'

import { FaAngleDown, } from 'react-icons/fa';

export default function ActionButtons() {
  return (
    <div className="actionButtons">
      <div className="buttonsContainer">
        <div className="dropdown">
          <button className="exploreButton">
            Explore <FaAngleDown />
          </button>
          <div className="dropdownContent">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
          </div>
        </div>
        <div className="iconBG">
          <img src={ring} alt="test_img" />
        </div>
        <div className="iconBG">
          <img src={add} alt="test_img" />
        </div>
        <div className="iconBG">
          <img src={msg} alt="test_img" />
        </div>
        <div className="iconDP">
          <img src={dp} alt="test_img" />
        </div>
      </div>
    </div>
  )
}
