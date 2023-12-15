import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="coprights_links">
          <div className="d-flex">
            <a href="#">Contact us</a>
            <a href="#">Terms of use</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Help & Support</a>
          </div>
        </div>
        <div className="social_links">
          <div className="d-flex">
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
          </div>
        </div>
        <div className="halal_copyRight">
          <div className="d-flex space-between align-center">
            <p>Halal Network &copy; 2023. All right reserved</p>
            <div className="user-agreement">
              <a href="#">User Agreement</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
