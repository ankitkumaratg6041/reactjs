const heading = React.createElement('h1', { id:"heading",  style:{color: 'red'} }, 'hello world! from react');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);