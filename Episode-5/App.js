import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';
import Footer from './src/Footer';

/**
 * Header Component
 * - Logo
 * - Nav Items
 * Body Component
 * - Search
 * - Restaurant Container
 *  - Restaurant Card
 * Footer Component
 * - Links
 * - Address
 * - Contact
 * - Copy Right
 */

const App = () => { 
    return (
        <div>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);