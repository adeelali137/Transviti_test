import React from 'react'
import mapPin from '../assets/map-pin.png'
import search from '../assets/search 1.png'

export default function SearchBar() {
  return (
    <div className="searchBar">
      <img src={search} alt="search" className="searchIcon" />
      <input type="text" placeholder="Search..." className="searchInput" />
      <div className="location">
        <img src={mapPin} className="locationIcon" alt="test_img" />
        <select className="cityDropdown">
          <option value="city1">Canada</option>
          <option value="city2">Berlin</option>
        </select>
      </div>
    </div>
  )
}
