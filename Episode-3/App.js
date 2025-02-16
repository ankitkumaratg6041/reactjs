import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

// JSX (transpiled before it reaches the JS engine) - parcel - babel

// JSX => React.createElement => React Element (which is an object) => ReactDOM.render (it processes that object) => DOM Element (which is a real DOM/HTML element)

// Core React way of making HTML elements
const heading = React.createElement('h1', { id: "heading" }, 'Core React way of making HTML elements');

// JSX way of making HTML elements
const jsxHeading = <h1 id="heading">JSX Way of making HTML Element</h1>;

// JSX way of making HTML elements using function component

const Title = () => {
    return <h1 id='heading'>Learning ReactJS</h1>
}

const HeadingComponent = () => {
    const [backgroundColor, setBackgroundColor] = useState('');

    function changeBackgroundColor() {
        if (backgroundColor === '#4D7C83') {
            setBackgroundColor('');
            document.body.style.backgroundColor = '';
        }
        else {
            setBackgroundColor('#4D7C83');
            document.body.style.transition = 'background-color 0.5s';
            document.body.style.backgroundColor = '#4D7C83';
        }
    }

    return (
        <div>
            <Title/>
            <h1 id="heading" onMouseOver={changeBackgroundColor} onMouseOut={changeBackgroundColor}>JSX way of making HTML elements using function component</h1>
        </div>
    );
}

/*
    Using One React Component inside another React Component is called Component Composition
    For example: Title component is used inside HeadingComponent
*/


/**
 * Assignment
 */

const Logo = () => { 
    return <h1 className='logo'>Logo</h1>
}
const SearchBar = () => { 
    return <input className='search-bar' type="text" placeholder="Search..."/>
}
const UserIcon = () => { 
    return <img className='user-icon' src="https://img.icons8.com/ios/452/user-male-circle.png" alt="User Icon" width={50} height={50}/>
}
const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <SearchBar/>
            <UserIcon/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);