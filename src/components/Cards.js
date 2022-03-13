import React, { useState, useEffect } from 'react'
import panda from '../assets/Images/panda.jpg'
import tiger from '../assets/Images/tiger.png'
import girafe from '../assets/Images/girafe.png'
import seaTurtle from '../assets/Images/seaTurtle.jpeg'
import squriel from '../assets/Images/squriel.jpg'
import bee from '../assets/Images/bee.png'
import Card from './Card'
import './Cards.css'
const DUMB_ARRAY = [
    {
        id: 1,
        src: panda,
        matched: false
    },
    {
        id: 1,
        src: panda,
        matched: false
    },
    {
        id: 2,
        src: tiger,
        matched: false
    },
    {
        id: 2,
        src: tiger,
        matched: false
    },
    {
        id: 3,
        src: girafe,
        matched: false
    },
    {
        id: 3,
        src: girafe,
        matched: false
    },
    {
        id: 4,
        src: seaTurtle,
        matched: false
    },
    {
        id: 4,
        src: seaTurtle,
        matched: false
    },
    {
        id: 5,
        src: squriel,
        matched: false
    },
    {
        id: 5,
        src: squriel,
        matched: false
    },
    {
        id: 6,
        src: bee,
        matched: false
    },
    {
        id: 6,
        src: bee,
        matched: false
    },
]
const Cards = () => {
    const [turn, setTurn] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [cards, setCards] = useState([])
    const shuffleCards = () => {
        const shuffle = [...DUMB_ARRAY].sort(() => 0.5 - Math.random())
            .map((card) => ({ ...card }))
        setCards(shuffle)
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurn(0)
    }

    const handelChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }


    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.id === choiceTwo.id) {
                setCards((prevCard) => {
                    return prevCard.map(card => {
                        if (card.id === choiceOne.id) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => {
                    resetTurn()

                }, 1000)
            }
        }
    }, [choiceOne, choiceTwo])
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurn(prevTurn => prevTurn + 1)
    }


    useEffect(() => {
        shuffleCards()
    }, [])

    const allTrue = cards.every(item => item.matched === true)

    return (
        <>
            <div className='Header'>
                <h1>Memory Game</h1>
                <button onClick={shuffleCards}>New Game</button>
            </div>
            <div>
                Your Turn: {turn}
            </div>
           
            {allTrue ? (<h2 data-text='GG' className='creativeTitle'>GG</h2>)

                :
                <div className='cardsContainer'>
                    {cards.map((card) => (
                        <Card card={card}
                            handelChoice={handelChoice}
                            flliped={card === choiceOne || card === choiceTwo || card.matched}

                        />
                    ))}

                </div>
            }
        </>
    )
}

export default Cards