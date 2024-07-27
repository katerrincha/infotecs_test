import React, { useState } from 'react';
import Modal from 'react-modal';

function NewModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

    const modalContent = (
        <div>
        </div>
    );
    return (
    <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
        </Modal>
    </div>
    );
}



export default NewModal;