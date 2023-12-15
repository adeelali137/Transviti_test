import React from 'react'

import detail1 from '../assets/Peronsal Profile - About - Job Icon.png'
import detail2 from '../assets/Peronsal Profile - About - Joined Date Icon.png'
import detail3 from '../assets/Peronsal Profile - About - Location Icon.png'
import detail4 from '../assets/Peronsal Profile - About - Relationship Status Icon.png'
import detail5 from '../assets/Peronsal Profile - About - Web Link  Icon.png'




export default function About() {
    return (
        <div className='aboutSection'>
            <div className="content">
                <h6>About</h6>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
            </div>
            <div className="post__followers">
                <div className="colmn">
                    <p>Posts</p>
                    <h6>1.3k</h6>
                </div>
                <div className="colmn">
                    <p>Following</p>
                    <h6>3,487</h6>
                </div>
                <div className="colmn">
                    <p>Followers</p>
                    <h6>2,098</h6>
                </div>
            </div>
            <div className="moreInfo">
                <div className="dedtail">
                    <img src={detail1} alt="test_img" />
                    <p>Yogyakarta, ID</p>
                </div>
                <div className="dedtail">
                    <img src={detail2} alt="test_img" />
                    <p>Single</p>
                </div>
                <div className="dedtail">
                    <img src={detail3} alt="test_img" />
                    <p>Joined June 2012</p>
                </div>
                <div className="dedtail">
                    <img src={detail4} alt="test_img" />
                    <p>dribble.com/fawait</p>
                </div>
                <div className="dedtail">
                    <img src={detail5} alt="test_img" />
                    <p>Working at Sebo Studio</p>
                </div>
            </div>
        </div>
    )
}
