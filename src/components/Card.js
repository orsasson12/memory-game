import React from 'react'
import backGroundImage from '../assets/Images/background.jpg'
import './Cards.css'
const Card = ({ card, handelChoice, flliped }) => {


    const handelClick = () => {

        handelChoice(card)
    }
 
    return (
        <>

            <div className='card'>

                <div className={flliped ? 'flliped' : ''}>

                    <img className='frontImage' src={card.src} alt='david' />
                    <div>
                        <img className='backImage' onClick={() => handelClick(card.id)} src={backGroundImage} alt="backgroundImage" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card