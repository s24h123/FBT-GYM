"use client";

import React from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import ReusableButton from './ReusableButton';
import ContactForm from './ContactForm';

export default function Banner() {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/1.png"  // Usa la ruta correcta aquí
            alt="Banner"
          />
          <Carousel.Caption>
            <h3>Welcome to FBT Functional Body Training</h3>
            <p>Transform your body with our expert programs.</p>
            <ReusableButton onClick={handleOpenModal}>Contact Us</ReusableButton>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Puedes añadir más items si es necesario */}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm />
        </Modal.Body>
        <Modal.Footer>
          <ReusableButton onClick={handleCloseModal}>Close</ReusableButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
