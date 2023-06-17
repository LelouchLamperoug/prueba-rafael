import "./App.css";
import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import { Endpoints } from "./service/endpoints";
import useFetch from "./hooks/useFetch";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useFetch(Endpoints.Channels);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div className="open-modal">
        <button className="epg-button" onClick={handleOpenModal}>
          Mostrar EPG
        </button>
      </div>
      <Modal data={data} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
