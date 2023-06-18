import React, { useMemo, useState } from 'react'
import { timeRanges, calculateWidth, formatTimeRange } from '../../utils';
import './Modal.css'

const Modal = ({ data, isOpen, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (itemName) => setHoveredItem(itemName)
    const handleMouseLeave = () => setHoveredItem(null);

    const dataTransformed = useMemo(() => {
        return data.map(channel => ({
            ...channel,
            events: channel.events.map(program => ({
                ...program,
                minWidth: calculateWidth(program.duration),
                timeRange: formatTimeRange(program.date_begin, program.date_end)
            }))
        }))
    }, [data])

    if (!isOpen) return null;

    return (
        <div data-testid="modal-overlay" className="modal-overlay">
            <div className="modal">
                <div className="modal-upper-content">
                    <div className='upper-section'>
                        <span data-testid="close-button" className="close" onClick={onClose}>&times;</span>
                    </div>
                    <div className='header-text'>
                        <span>EPG Schedule</span>
                    </div>
                    <h3 data-testid='hover-title'>{hoveredItem ? hoveredItem.name : ''}</h3>
                    <span data-testid='hover-range'>{hoveredItem ? hoveredItem.timeRange : ''}</span>
                    <span data-testid='hover-description'>{hoveredItem ? hoveredItem.description : ''}</span>
                </div>
                <div className='modal-lower-content'>
                    <div className="modal-content">
                        <div className='channels-name'>
                            <div className='channel-header'>
                                <span>HOY</span>
                            </div>
                            {data.map((channel, index) => {<div key={index} className='channel-row'><img className='image' alt='tv-logo' src={channel.image} /><span>{channel.name}</span></div> })}
                        </div>
                        <div className='schedule'>
                            <div className='time-range-row'>
                                {timeRanges.map((time) => {<div key={time} className='time-row'>{time}</div> })}
                            </div>
                            <div>
                                {dataTransformed.map((channel, index) => (
                                    <div key={index} className='programs-row'>{channel.events.map((program, index) => (
                                        <div className='program' style={{ minWidth: program.minWidth }} key={index} onMouseEnter={() => handleMouseEnter(program)} onMouseLeave={handleMouseLeave}>
                                            <span title={program.name} className='timerange'>{program.name}</span>
                                            <span className='timerange'>{program.timeRange}</span>
                                        </div>
                                    ))}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
