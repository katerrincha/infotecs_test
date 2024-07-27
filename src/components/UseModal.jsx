import { useState, useCallback } from 'react';
import Modal from 'react-modal';

const useModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return { modalIsOpen, openModal, closeModal };
};

export default useModal;