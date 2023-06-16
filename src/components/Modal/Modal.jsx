import React from 'react'
import './Modal.css'

const Modal = ({ data, isOpen, onClose }) => {

    const timeRanges = ['20:00', '21:00', '22:00', '23:00', '24:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-upper-content">
                    <div className='upper-section'>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                    <h2>Título del modal</h2>
                    <p>Contenido del modal.</p>
                </div>
                <div className='modal-lower-content'>
                    <div className="modal-content">
                        <div className='channels-name'>
                            <div className='channel-header'>
                                <span>HOY</span>
                            </div>
                            {data.map((channel) => { return <div className='channel-row'><img className='image' alt='tv-logo' src={channel.image} /><span>{channel.name}</span></div> })}
                        </div>
                        <div className='schedule'>
                            <div className='time-range-row'>
                                {timeRanges.map((time) => { return <div className='time-row'>{time}</div> })}
                            </div>
                            <div className='programs-row'>
                             {data.map((channel) => {return <div style={{display:'flex'}}>{channel.events.map((program) => { return <div className='program'>{program.name}</div>})}</div> })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
