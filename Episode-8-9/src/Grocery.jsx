import React from 'react'

const Grocery = () => {
  return (
    <div style={{padding: "30px", border: "2px solid red", margin: "50px 30px", borderRadius: "10px"}}>Grocery Component is here and it is ready to be splittled using <h1>Lazy Loading</h1> so in chrome dev tools you can see how it is now bundling our app into one <h2>.js</h2> file but our <h2>Grocery is not bundled in that file</h2> and it will be bundled into a separate <h2>js file once we click on it</h2></div>
  )
}

export default Grocery