import React from 'react'
import profile from './profile.jpg';
import './about.css';
function about() {
    return (
        <>
            <div className="about">
                <div className="img-contener">
                <img alt="" src={profile}></img>

                </div>
                <div className="description">
                    <h1>I am a graduate of the Gdańsk University of
                    Technology. I have been programming since
                    the beginning of my academic times and I
                    am enjoying the process. I am looking
                    forward to gaining more experience as a
                    software developer. My main focus is
                    front-end development.</h1>
                </div>

            </div>
        </>
    )
}

export default about
