import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'


const Sidebar = () => {

    const [extended, setExtended] = useState(false);



    return (
        <div className='sidebar'>
            <div className="top menu">
                <img onClick={() => setExtended(prev => !prev)}className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat ">
                    <img  src={assets.plus_icon} alt="" />
                    {extended ? <p  >New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className='recent-title menu'>Recent</p>
                        <div className="recent-entry">
                            <img className='menu' src={assets.message_icon} alt="" />
                            <p className='menu' >What is react</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className='menu' src={assets.question_icon} alt="" />
                    {extended ? <p className='menu' >Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className='menu' src={assets.history_icon} alt="" />
                    {extended ? <p className='menu' >Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className='menu' src={assets.setting_icon} alt="" />
                    {extended ? <p className='menu' >Setting</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
