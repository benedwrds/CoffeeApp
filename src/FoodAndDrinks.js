import React from 'react';
import ReactDOM from 'react-dom';
//import Coffee from './Coffee.js'

  function FoodAndDrinks(props){
      return <pre>
        {props.drink} {props.name}   <button onClick={props.action} 
          >Remove Item</button>

        </pre>
  }

  export default FoodAndDrinks;