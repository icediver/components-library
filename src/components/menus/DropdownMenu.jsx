import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import user from './user.jpg';
import {
  IoPersonOutline,
  IoChatbubbleOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoHelpOutline,
} from 'react-icons/io5';

import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      
      if (!e.composedPath().includes(menuRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener(
      'click',
      handleClickOutside,
    );

    return () =>
      document.body.removeEventListener(
        'click',
        handleClickOutside,
      );
  }, []);

  return (
    <Container>
      <div
        ref={menuRef}
        onClick={() => setOpen(!open)}
        className={
          open ? 'navigation active' : 'navigation'
        }>
        <div className="userBx">
          <div className="imgBx">
            <img src={user} alt="user" />
          </div>
          <p className="username">Irina Hakamada</p>
        </div>
        <div className="menuToggle"></div>
        <ul className="menu">
          <IconContext.Provider value={{ size: '1.5em' }}>
            <li>
              <Link to="#">
                <IoPersonOutline />
                My Profile
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoChatbubbleOutline />
                Mesages
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoNotificationsOutline />
                Notification
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoSettingsOutline />
                Settings
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoHelpOutline />
                Help & support
              </Link>
            </li>
            <li>
              <Link to="#">
                <IoLogOutOutline />
                Logout
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </Container>
  );
};

export default DropdownMenu;

const Container = styled.div`
  .navigation {
    position: fixed;
    top: 100px;
    right: 20px;
    width: 120px;
    height: 60px;
    background: #fff;
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    transition: height 0.5s, width 0.5s;
    transition-delay: 0s, 0.75s;
    overflow: hidden;

    .userBx {
      position: relative;
      width: 60px;
      height: 60px;
      background: #fff;
      display: flex;
      align-items: center;
      overflow: hidden;
      transition: 0.5s;
      transition-delay: 0.5s;
      .imgBx {
        position: relative;
        min-width: 60px;
        height: 60px;
        background: #000;
        border-radius: 50%;
        border: 10px solid #fff;
        overflow: hidden;
        img {
          position: absolute;
          top: 0;
          left: 12px;
          margin-left: 0px;
          width: 100%;
          height: 100%;
          transform: scale(2.5);
          object-fit: cover;
        }
      }
      .username {
        white-space: nowrap;
        color: #555;
        font-size: 18px;
      }
    }
    &.active .userBx {
      width: calc(100% - 60px);
      transition-delay: 0;
    }
    .menuToggle {
      position: relative;
      width: 60px;
      height: 60px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
        content: '';
        position: absolute;
        width: 32px;
        height: 4px;
        background: #555;
        transform: translateY(-10px);
        box-shadow: 0 10px #555;
        transition: 0.5s;
      }
      &:after {
        content: '';
        position: absolute;
        width: 32px;
        height: 4px;
        background: #555;
        transform: translateY(10px);
        transition: 0.5s;
      }
    }
    &.active .menuToggle:before {
      transform: translateY(0px) rotate(45deg);
      box-shadow: 0 0 #555;
    }
    &.active .menuToggle:after {
      transform: translateY(0px) rotate(-45deg);
    }
    &.active {
      width: 300px;
      height: 400px;
      transition: width 0.5s, height 0.5s;
      transition-delay: 0s, 0.75s;
    }
    .menu {
      position: absolute;
      width: 100%;
      height: calc(100% - 60px);
      margin-top: 60px;
      padding: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      li {
        list-style: none;
      }
      li a {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 20px 0;
        font-size: 18px;
        text-decoration: none;
        color: #555;
      }
      li a:hover {
        color: #4e65ff;
      }
    }
  }
`;
