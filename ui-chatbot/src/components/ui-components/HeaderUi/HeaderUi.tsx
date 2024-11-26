import React, { FC } from 'react';
import chatBot from '../../../assets/chatBot.svg';
import './HeaderUi.css';

function Header (props: any){
   return (
      <div className='header'>
         <img src={chatBot} className='logo' alt="chatbot logo"></img>
      </div>
   )
}

export default Header;
