import React, {useRef, useCallback, useEffect} from 'react';
import {useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';




export const Modal = ({showModal, setShowModal}) => {
  
  const modalRef = useRef();
  
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }

  const keyPress = useCallback( e => {
    if(e.key === 'Escape' && showModal ) {
      setShowModal(false);
    }
  }, [setShowModal, showModal])

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return (
    <>
    {showModal ? (
      <Background ref={modalRef} onClick={closeModal}>
        <animated.div style={animation}>
        <ModalWrapper showModal={showModal} >
          <ModalImg src={require('./modal.jpg')} alt='camera'/>
          <ModalContent>
            <h1>Are you ready? </h1>
            <p>Get exclusive acces to our next launch</p>
            <button>Join Now</button>
          </ModalContent>
          <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
        </ModalWrapper>
        </animated.div>
      </Background>
    ): null}

      
    </>
  )
};

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .5);
  position:fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  /* height: 500px; */
  /* box-shadow: 0 5px 16px rgba(0,0,0, .2); */
  box-shadow: rgba(149, 157, 165, 0.4) 0 8px 24px;
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  /* border-radius: 10px; */
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  /* border-radius: 10px 0 0 10px; */
  background: #000;
  `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;
  P {
    margin-bottom: 1rem;

  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;