import React from 'react'
import background from '../assets/bg.png'
import dp from '../assets/dp.png'


export default function ProfileCover() {
    return (
        <div className='profile__coverr'>
            <div class="cover__photo">
                <img src={background} alt="test_img" />
            </div>
            <div className="cover__content">
                <div className="data">
                    <img src={dp} alt="test_img" />
                    <div className="name">
                        <h6>Ahmad Nur Fawaid</h6>
                        <p>@fawait</p>
                    </div>
                </div>
                <div className="edit-button">
                    <button>Edit Photo</button>
                </div>
            </div>
        </div>
    )
}
