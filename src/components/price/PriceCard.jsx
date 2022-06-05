import React from 'react';
import styled from 'styled-components';
import {
  FaPaperPlane,
  FaCheck,
  FaTimes,
  FaPlane,
  FaRocket,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import dataPriceCard from './data/dataPriceCard';


const iconStyle = {
  marginTop: 20,
  fontSize: '60px',
  color: '#ffc98e'
}

const PriceCard = () => {
  // console.log(dataPriceCard[0].icon);
  return (
    <PriceSection>
      <Price>
        <div className="row">

          {
            dataPriceCard.map(item => {
              return (
                <div className="column" key={item.title}>
                    <div className="box">
                      <div className="title">
                        <IconContext.Provider value={{ className:"myReact-icons", size: 60}}>
                          {item.icon()}
                        </IconContext.Provider>
                        <h2>{item.title}</h2>
                      </div>
                      <div className="price">
                        <h4>
                          <sup>$</sup>{item.price}
                        </h4>
                      </div>
                      <div className="option">
                        <ul>
                          <li>
                            <FaCheck />
                            {item.space}
                          </li>
                          <li>
                            <FaCheck />
                            {item.domains}
                          </li>
                          <li>
                          <FaCheck />
                            20 Email Address
                          </li>
                          <li>
                          { item.LiveSupport ? <FaCheck/> : <FaTimes/> }
                            LiveSupport
                          </li>
                        </ul>
                      </div>
                      <a href="#" className="btn">
                        Order Now
                      </a>
                    </div>
                </div>
              )  }
            )
          }
          
          </div>
      </Price>
    </PriceSection>
  );
};

export default PriceCard;

const PriceSection = styled.section`
  width: 1200px;
  margin: 0 auto;
  .column {
    position: relative;
    width: 400px;
    float: left;
    /* transition: 0.5s; */
    .box {
      position: relative;
      width: 320px;
      min-height: 550px;
      margin: 0 auto;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
      background: linear-gradient (0deg, #202022, #464646);
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 150px;
      border: 3px solid #ffc98e;
      box-shadow: 0 0 0 6px #323232, 0 0 0 10px #ffc98e, 0 0 0 20px #323232, 0 10px 150px rgba(0,0,0,1);
      overflow: hidden;
      transition: .3s;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -50;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255, .1);
        pointer-events: none;
      }
      .title {
        color: #FFF;
        margin: 20px 0 0;
        padding: 0;
        .myReact-icons {
          color: #ffc98e;
          margin-top: 20px;
        }
      }
      .price {
        font-size: 60px;
        color: #ffc98e;
        margin: 10px 0;
        padding: 0;
      }
      .option {
        margin: 20px 0;
        padding: 0;
        li {
           
          list-style: none;
          color: #fff;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255, .1);
        }
        li:last-child {
          border-bottom: none;
        }
      }
      .btn {
        display: inline-block;
        background: #ffc98e;
        color: #262626;
        font-weight: bold;
        padding: 10px 30px;
        margin-top: 20px;
        text-decoration: none;
        border-radius: 10px;
      }
    }
    .box:hover {
      transform: scale(1.1);
    }
  }
`;

const Price = styled.div``;
const PaperPlane = styled(FaPaperPlane)`
  margin-top: 20px;
  font-size: 60px;
  color: #ffc98e;
  
`;
