import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import TinyFlag from "tiny-flag";



export default function DriverCard(props) {
const {isTeam,driver={},idx={},handleIncreaseScore,handleDecreaseScore} = props;
const {firstName,lastName,number,team,image,country,points} = driver; 


  return (
    <span className="driver_card " style={{ margin: '1rem' }}>
      {isTeam ? 
      <Card>

      </Card> : 
      <Card key={number} border="secondary" style={{ width: '17rem' }}>
          <Card.Header className='d-flex flex-row align-items-center'>
            <img style={{width : 80}} src={image}></img> 
            <p>{firstName} {lastName}</p>
          </Card.Header>
          <Card.Body>
            <p>Country: {country}</p>
          {/* <TinyFlag  
            fallbackImageURL={require("FlagKit/Assets/SVG/" + country + ".svg").default}
          /> */}
            <p>TEAM: {team}</p>
            <p>POINTS: {points}</p>
            <Button  onClick={()=> handleIncreaseScore(idx)} variant="primary">+5 POINTS</Button>{' '}
            <Button  onClick={()=> handleDecreaseScore(idx)} variant="secondary">-5 POINTS</Button>{' '}
          </Card.Body>
              
      </Card>
    }
          
    </span>
  )
}
