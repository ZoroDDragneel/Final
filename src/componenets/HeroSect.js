import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSect.css';

function HeroSect(){
    return(
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Any fool can write code that a computer can understand</h1>
        <p>Good programmers write code that humans can understand.” – Martin Fowler</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                My level 
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                of Xp<i className='far fa-play-circle' />
            </Button>
        </div>
        </div>
    )
}
export default HeroSect