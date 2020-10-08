import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className ='cards'>
            <h1>Check out these EPIC Languages!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/javascript.png"
                            text="Any app that can be written in JavaScript, will eventually be written in JavaScript."
                            label='Languages'
                            path='/languages'
                        />
                        <CardItem 
                            src="images/java.png"
                            text="The apprentice avoids all use of Java classes. The journeyman embraces Java classes. The master knows which classes to embrace and which to avoid."
                            label='Languages'
                            path='/languages'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/python.jpg"
                            text="The joy of coding Python should be in seeing short, concise, readable classes that express a lot of action in a small amount of clear code -- not in reams of trivial code that bores the reader to death."
                            label='Languages'
                            path='/languages'
                        />
                        <CardItem 
                            src="images/reacte.png"
                            text="React Native is a great framework that bridges the gap between web and mobile. At Discord, it has brought us incredibly efficiency. It allows us to write reusable code, learn from each other, and move fast with a two-person team."
                            label='Languages'
                            path='/languages'
                            
                        />
                        <CardItem 
                            src="images/angular.png"
                            text="Creating your own portfolio takes time. First you have to choose the technologies among the overwhelming amount of options we have. Am I going to go for Angular? What then, where do I host? Once you decided and set everything up, you’ve got to list all your projects manually, add the descriptions, links, images and decide on a design that shows your very best. Suddenly, the simple task of creating a pretty portfolio is overwhelming."
                            label='Languages'
                            path='/languages'
                            
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards;
