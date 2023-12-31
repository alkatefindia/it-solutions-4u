import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/FormModal.css";
import { IoClose } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const FormModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("closing");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ii2tt4d",
      "template_15qcyuv",
      form.current,
      "iNEeKpL_mzTpIjCOh"
    );
    console.log("sending");
    form.current.reset();
    console.log("send");
  };

  useEffect(() => {
    const modalShownBefore = localStorage.getItem("modalShown");

    if (!modalShownBefore) {
      handleShow();

      localStorage.setItem("modalShown", "true");
    }
  }, []);
  return (
    <div>
      <Modal dialogClassName="custom-modal" show={show} onHide={handleClose}>
        <div className="modal-close ms-auto">
          <IoClose className="fs-3" onClick={handleClose} />
        </div>
        <Modal.Title className="text-center mt-3">
          What services are you looking for?
        </Modal.Title>

        <Modal.Body>
          <div className="d-flex flex-wrap  justify-content-center gap-2 mt-3">
            <div className="modal-services">Digital Marketing</div>
            <div className="modal-services">Website Design & Development</div>
            <div className="modal-services">Printer Rental</div>
            <div className="modal-services">SEO</div>
            <div className="modal-services">Printer Sales</div>
            <div className="modal-services">IT AMC Services</div>
            <div className="modal-services">CCTV</div>
            <div className="modal-services">Mobile App Development</div>
          </div>
        </Modal.Body>

        <Modal.Title className="text-center mt-5">
          Didn’t find what you were looking for? <br />
          Please provide us with your contact details and we’ll be in touch
          shortly.
        </Modal.Title>
        <Modal.Body>
          <section id="contact">
            <div class="container">
              <main>
                <form
                  className="d-flex flex-column justify-content-center"
                  id="contactForm"
                  action="sendemail.php"
                  method="post"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="form-modal d-flex flex-wrap gap-5">
                    <div class="input">
                      <label for="name">First Name</label>
                      <input type="text" name="name" id="name" required />
                    </div>
                    <div class="input">
                      <label for="name">Last Name</label>
                      <input type="text" name="last-name" id="name" required />
                    </div>
                    <div class="input">
                      <label for="name">company Name</label>
                      <input type="text" name="company" id="name" required />
                    </div>
                    <div class="input">
                      <label for="email">Email</label>
                      <input type="text" name="email" id="email" required />
                    </div>
                    <div class="input">
                      <label for="mobile">Mobile Number</label>
                      <input type="tel" name="mobile" id="name" required />
                    </div>
                  </div>

                  <div className="modal-button">
                    <Button
                      className="mt-5"
                      type="submit"
                      value="Send"
                      variant="success"
                      onClick={handleClose}
                    >
                      submit
                    </Button>
                  </div>
                </form>
              </main>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FormModal;
