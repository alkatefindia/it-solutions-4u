import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ThanksNote = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>

    <Modal.Body >
    <Button className='float-end bg-danger border-0' onClick={handleClose}><i className="fa-solid fa-xmark "></i></Button>

        <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <i className="fa-solid fs-1 text-success fw-bolder fa-check"></i>
        <h3 className='mt-3 text-center'>Thank you for submitting the form!</h3>
        <p className='text-center w-75'>We appreciate your message. Our team will get in touch with you soon.</p>
        </div>
      
    </Modal.Body>
  </Modal>
  )
}

export default ThanksNote