import './App.css';
import React, { useState, useEffect } from 'react';
import Modal from './components/Modal/Modal';
import { API_URL } from './api';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const handleOpenModal = () =>  setIsModalOpen(true);
  const handleCloseModal = () =>  setIsModalOpen(false);

  useEffect(() => {
    const apiUrl = API_URL;
    fetch(apiUrl)
    .then(resp => resp.json()).then(data => {
      setData(data.response.channels);
      console.log(data.response);
    })
  }, [])

  return (
    <div className='App'>
      <div className='open-modal'>
        <button className='epg-button' onClick={handleOpenModal}>Mostrar EPG</button>
      </div>
      <Modal data={data} isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>
  );
}

export default App;
