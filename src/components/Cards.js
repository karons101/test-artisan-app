import React from 'react';

import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Select a Handy Man!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/HandyMan-1.jpg')}
              text='Capentry at its best'
              label='Capenter'
              path='/services'
            />
            <CardItem
              src={require('../images/ServiceMan-2.jpg')}
              text='Professional Service hands'
              label='Service Man'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/Plumber-3.jpg')}
              text='Super deal Plumbers'
              label='Plumber'
              path='/services'
            />
            <CardItem
              src={require('../images/Technician_Electrician-4.jpg')}
              text='Experienced and Advance Tech Repairers'
              label='Generator Repairer/ Electricians'
              path='/products'
            />
            <CardItem
              src={require('../images/Driver-5.jpg')}
              text='Professional Chuffuers, Drivers'
              label='Driver'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;