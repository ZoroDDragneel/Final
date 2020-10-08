import React from 'react';
import AboutCardItem from './AboutCardItem';
import './AboutCard.css';

function Cards() {
    return (
        <div className ='aboutcards'>
            <h1>About Me!!!</h1>
            <div className='aboutcards__container'>
                <div className='aboutcards__wrapper'>
                    <ul className='aboutcards__items'>
                        <AboutCardItem 
                            src="images/about.jpg"
                            text="Hello, my name is Kopano Thekiso you might know me as your friendly neighboorhood programmer.
                            I am a hardworking and really ambitious student who has grown to have a great passion for programming, honestly speaking I stumbled on to programming 
                            during my fist year and found it very challenging and at the same time exciting especially after putting all the pieces of the program together and its running after
                            trail and error. I am currently in my third year studying BSC in Computer Science and Information Technology at the Potchefstrom North West University. I have 
                            strong interpersonal skills which enable me to interact with a wide range of clients and also technical skills. I am eager to be challenged in order to grow and 
                            further improve my IT skills. My greatest passion in life is using my acquired skills to benefit other people and organisations while also growing as a person."
                            label='Contact me at: 0768385865 or Email me at: kopanothekiso@gmail.com'
                            path='/About'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;
