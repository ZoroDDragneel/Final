import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards2() {
    return (
        <div className ='cards'>
            <h1>Check out these EPIC Languages!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/javascript.png"
                            text="JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities."
                            label='Languages'
                            path='/languages'
                        />
                        <CardItem 
                            src="images/java.png"
                            text="Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language."
                            label='Languages'
                            path='/languages'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/python.jpg"
                            text="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse."
                            label='Languages'
                            path='/languages'
                        />
                        <CardItem 
                            src="images/reacte.png"
                            text="React (also known as React. js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
                            label='Languages'
                            path='/languages'
                            
                        />
                        <CardItem 
                            src="images/angular.png"
                            text="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. ... Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data."
                            label='Languages'
                            path='/languages'
                            
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                            src="images/csharp.jpg"
                            text="C# (pronounced C-sharp) is an object-oriented programming language from Microsoft that aims to combine the computing power of C++ with the programming ease of Visual Basic. C# is based on C++ and contains features similar to those of Java. C# is designed to work with Microsoft's . Net platform."
                            label='Languages'
                            path='/languages'
                        />
                        <CardItem 
                            src="images/c++.png"
                            text="C++ is a statically typed, compiled, general-purpose, case-sensitive, free-form programming language that supports procedural, object-oriented, and generic programming. C++ is regarded as a middle-level language, as it comprises a combination of both high-level and low-level language features."
                            label='Languages'
                            path='/languages'
                            
                        />
                        <CardItem 
                            src="images/html.png"
                            text="First developed by Tim Berners-Lee in 1990, HTML is short for Hypertext Markup Language. HTML is used to create electronic documents (called pages) that are displayed on the World Wide Web. ... Every web page you see on the Internet is written using one version of HTML code or another."
                            label='Languages'
                            path='/languages'
                            
                        />
                        <CardItem 
                            src="images/sql.jpg"
                            text="Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational data stream management system (RDSMS)."
                            label='Languages'
                            path='/languages'
                            
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards2;
