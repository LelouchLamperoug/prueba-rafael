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
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-upper-content">
                    <div className='upper-section'>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                    <div className='header-text'>
                        <span>EPG Schedule</span>
                    </div>
                    <h3>{hoveredItem ? hoveredItem.name : ''}</h3>
                    <span>{hoveredItem ? hoveredItem.timeRange : ''}</span>
                    <span>{hoveredItem ? hoveredItem.description : ''}</span>
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
                                {timeRanges.map((time) => { return <div key={time} className='time-row'>{time}</div> })}
                            </div>
                            <div>
                                {dataTransformed.map((channel, index) => (
                                    <div key={index} className='programs-row'>{channel.events.map((program, index) => (
                                        <div className='program' style={{ minWidth: program.minWidth }} key={index} onMouseEnter={() => handleMouseEnter(program)} onMouseLeave={handleMouseLeave}>
                                            <span className='timerange'>{program.name}<br />{program.timeRange}</span>
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
