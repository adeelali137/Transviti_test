import React, { useState } from 'react'
import Headers from '../components/Header'
import ProfileCover from '../components/ProfileCover';
import About from '../components/About';
import Photos from '../components/Photos';
import PostCard from '../components/PostCard';
import NewPost from '../components/NewPost';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ActionButtons from '../components/ActionButtons';


function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Headers toggleDrawer={toggleDrawer} />
      <div className="home">
        <div className={`container ${isDrawerOpen ? "openSideBar" : ""}`}>
          <div className="leftColumn">
            <SearchBar />
            <ActionButtons />
          </div>
        </div>
        <ProfileCover />
        <div className="twoSides">
          <div className="leftSide">
            <About />
            <Photos />
          </div>
          <div className="rightSide">
            <NewPost />
            <PostCard dataContent="Peace On Earth A Wonderful Wish But No Way" authorname="Ahmad Nur Fawaid" time="12 April at 09.28 PM" />
            <PostCard dataContent="One of the perks of working in an international company is sharing knowledge with your colleagues. " authorname="Ahmad Fawaid" time="20 May at 01.28 PM" images={true} />
            <Footer />
          </div>
        </div>

      </div>
    </>
  )
}

export default Home