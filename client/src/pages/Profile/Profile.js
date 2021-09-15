import React from 'react'
import './Profile.css'

function Profile({user}) {
    return (
        <div className="main">

            <h2>My Profile</h2>

            <div className="content">
                <h3><span style={{color: 'red'}}>Username: </span>{user.username}</h3>
                <h3><span style={{color: 'red'}}>Email: </span>{user.email}</h3>
            </div>

            <div className="content">

                <h3 className="header">Change Password</h3>

                <div className="info">
                    <input type="password" placeholder="Current Password"/>
                </div>

                <div className="info">
                    <input type="password" placeholder="New Password"/>
                </div>

                <button className="btn">Save</button>

            </div>

        </div>
    )
}

export default Profile
