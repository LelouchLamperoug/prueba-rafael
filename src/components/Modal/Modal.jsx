import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ data, isOpen, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName) => setHoveredItem(itemName);
    const handleMouseLeave = () => setHoveredItem(null);

    const timeRanges = ['20:00', '21:00', '22:00', '23:00', '24:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-upper-content">
                    <div className='upper-section'>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                    <h2>{hoveredItem ? hoveredItem.name : ''}</h2>
                    <p>Contenido del modal.</p>
                </div>
                <div className='modal-lower-content'>
                    <div className="modal-content">
                        <div className='channels-name'>
                            <div className='channel-header'>
                                <span>HOY</span>
                            </div>
                            {data.map((channel, index) => { return <div key={index} className='channel-row'><img className='image' alt='tv-logo' src={channel.image} /><span>{channel.name}</span></div> })}
                        </div>
                        <div className='schedule'>
                            <div className='time-range-row'>
                                {timeRanges.map((time) => { return <div className='time-row'>{time}</div> })}
                            </div>
                            <div>
                                {data.map((channel, index) => {
                                    return <div key={index} className='programs-row'>{channel.events.map((program, index) => {
                                    return <div className='program' key={index}
                                            onMouseEnter={() => handleMouseEnter(program)}
                                            onMouseLeave={handleMouseLeave}>{program.name}
                                            </div>
                                    })}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
