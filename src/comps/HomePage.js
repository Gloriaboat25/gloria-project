import React from "react";
import "./Home.css"

function HomePage(){
    return(
        <div className="homea">
            <div className="homet">
                <h2 className="slog">Premium Video Meetings.</h2>
                <h2 className="slog2">Now free for everyone!</h2>
                <h2 className="slog3">We re-engineered the service we build for secure business meeting.</h2>
                <div className="actions">
                    <button className="start">
                        <div className="icon-camera "/>
                         New Meeting
                        </button>
                        <input className="room" placeholder="Enter a code or link!"/>

                </div>

            </div>
            <div className="tablet-frame">
                <div className="tablet">
                    <div className="tablet-notch"></div>
                    <div className="tablet-hbtn"></div>
                    <div className="screenb"></div>
                    <div className="div4"></div>
                    <div className="div5"></div>
                    <div className="div6"></div>
                    <div className="div7"></div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage;