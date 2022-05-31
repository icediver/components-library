import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../components/modals/Modal";
// import { GlobalStyle } from "./globalStyles";
// import { Modal } from "./components/Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  /* border-radius: 4px; */
  border: 0;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

function PageModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  return (
    <>
      <Container>
        <Button onClick={openModal}>I'm modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
      </Container>
    </>
  );
}

export default PageModal;
