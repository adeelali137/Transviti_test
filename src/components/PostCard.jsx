import React from 'react'

import dp from '../assets/dp.png'
import dots from '../assets/dots.png'
import likes from '../assets/like.png'
import share from '../assets/share.png'
import chat from '../assets/chat.png'

import img3 from '../assets/Peronsal Profile - Photos  - Photos 3.png'
import img2 from '../assets/Peronsal Profile - Post  - Photos 2.png'
import img1 from '../assets/Personal Profile - Post  - Photos 1.png'



export default function PostCard({ dataContent, authorname, time, images }) {
    return (
        <div className='PostCard'>
            <div className="authorInfo">
                <div className="author">
                    <div className="authorimg">
                        <img src={dp} alt="test_img" />
                    </div>
                    <div className="authorname">
                        <h6>{authorname}</h6>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="dots">
                    <img src={dots} alt="test_img" />
                </div>
            </div>
            <div className="postData">
                <p>{dataContent} </p>
                {images &&
                    <div className="images">
                        <img src={img1} className='img1' alt="test_img" />
                        <img src={img2} className='img2' alt="test_img" />
                        <img src={img3} className='img3' alt="test_img" />
                    </div>
                }
            </div>
            <div className="like__share__commet">
                <div className="comments">
                    <img src={chat} alt="test_img" />
                    <p>7 Comments</p>
                </div>
                <div className="likes">
                    <img src={likes} alt="test_img" />
                    <p>12 Likes</p>
                </div>
                <div className="share">
                    <img src={share} alt="test_img" />
                    <p>0 Share</p>
                </div>
            </div>
            <div className="commet__box">
                <img src={dp} alt="test_img" />
                <div className="write_comment">
                    <input type="text" name="" placeholder='Write your comment ' id="" />
                </div>
            </div>
        </div>
    )
}
