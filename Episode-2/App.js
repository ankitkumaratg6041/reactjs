import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Creating nested elements in React
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello I'm h1 tag</h1>
 *      </div>
 * </div>
 * 
 */

// const parent = React.createElement(
//     'div',
//     {id: 'parent'},
//     React.createElement(
//         'div',
//         {id: 'child'},
//         React.createElement(
//             'h1',
//             {},
//             'Hello I am h1 tag'
//         )
//     )
// )

/**
 * Creating siblings in React
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello I'm h1 tag</h1>
 *          <h2>Hello I'm h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    'div',
    {id: 'parent'},
    React.createElement(
        'div',
        {id: 'child'},
        [
            React.createElement('h1', {key:1}, 'Hello I am h1 tag'), // key is used to uniquely identify the element otherwise react will throw error
            React.createElement('h2', {key:2}, 'Hello I am h2 tag'),
        ]
    )
)
/**
 * Why is key needed?
 * In React, the key prop is used to uniquely identify elements in a list. This helps React optimize the rendering process by efficiently updating and reordering elements. Without a unique key, React would have difficulty determining which items have changed, been added, or removed, leading to potential performance issues and incorrect rendering.

Here's a more detailed explanation:

Identification: Keys help React identify which items have changed, are added, or are removed.
Performance: By using keys, React can minimize the number of DOM operations, making updates more efficient.
Consistency: Keys ensure that the component state is preserved correctly across re-renders.
 */

// const heading = React.createElement('h1', { id:"heading",  style:{color: 'red'} }, 'hello world! from react');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);