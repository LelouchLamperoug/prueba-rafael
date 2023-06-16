import React from 'react'
import './Modal.css'

const Modal = ({ data, isOpen, onClose }) => {
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
                <div className="modal-content">
                    <div className='channels-name'>
                        {data.map((channel) => { return <div className='channel-row'><img className='image' src={channel.image} /><span>{channel.name}</span></div> })}
                    </div>
                    <div className='schedule'>
                        horarios div
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
