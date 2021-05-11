import React from 'react';
import ReactDOM from 'react-dom';
import FoodAndDrinks from './FoodAndDrinks.js'
import TipAmount from './TipAmount'

class Coffee extends React.Component{
  constructor(props){
    super(props)

    //bind "this" to the removeLg function
     this.removeLg = this.removeLg.bind(this)
    
    // //removes small ice coffee
     this.removeSm = this.removeSm.bind(this)

    this.state = {
        price: 0.00,
        lgColdBrew: 0,
         smColdBrew: 0,
        // lgHouse: 0,
        // smHouse: 0,
        // smMatcha: 0,
        // lgMatcha: 0,
        // CactusTaco: 0,
        // BeanAvo: 0,
        // Soyrizo: 0,
        // VegBurrito: 0,
        // CheesePizza: 0,
        // CinniRoll: 0,
        tipButton: false,
        tip: 0
    }

    // this.handleChange= this.handleChange.bind(this)
    this.tipButtonTrue = this.tipButtonTrue.bind(this);
    this.tipButtonFalse = this.tipButtonFalse.bind(this);

  }

  // handleChange(event){

  // }
  tipButtonTrue(){
    this.setState({
      tipButton: true
    })
  }

  tipButtonFalse(){
    this.setState({
      tipButton: false
    })
  }

    // AddTip(tip){
    //   this.setState({
    //     tip: "Welcome Will"
    //   })
    // }

    // handleChange(e){
    //   //e.target is the element that is recieving the onChange
    //   const tip = e.target.value 
    //   this.props.AddTip(tip)
    // }

  // this.setState(function(state, props){
  //   return {
  //   price: this.state.price - 3.50,
  //   lgColdBrew: this.state.lgColdBrew -1
  //   }
  // })  

  //these methods "removeLg", and "removeSm" are sent to the child component "FoodAndDrinks"
    removeLg(){
      this.setState({
        price: this.state.price - 3.50,
        lgColdBrew: this.state.lgColdBrew -1
      })
    } 

    removeSm(){
      this.setState({
        price: this.state.price - 2.50,
        smColdBrew: this.state.smColdBrew -1
      })
    }


render(){
   
  return (
    <div style={{marginTop: "10%"}}>
      <div>
        <h2>Coffee</h2>
        <pre style={{tabSize: "4"}}><b>Cold Brew</b>    <button onClick={() => this.setState({ price: this.state.price + 3.50, lgColdBrew: this.state.lgColdBrew + 1
        })}>Large: $3.50 </button>  <button onClick={() =>this.setState({ price: this.state.price + 2.50, smColdBrew: this.state.smColdBrew + 1})}>Small: $2.50</button></pre>
{/* 
        <pre style={{tabSize: "4"}}><b>House Coffee</b>   <button onclick="addToCart(3.00)">Large: $3.00</button> <button onclick="addToCart(2.00)">Small: $2.00</button></pre> */}

        <pre style={{tabSize: "4"}}><b>Matcha Green Tea</b>   Large: $3.50  Small: $2.50 </pre>
      </div>
      <div>
        <br/>
        <h2>Tacos</h2>
        <pre style={{tabSize: "4"}}><b>Cactus, Black Bean, Potato</b>   $3.00</pre>
        <pre style={{tabSize: "4"}}><b>Black Bean, Avocado</b>    $3.00</pre>
        <pre style={{tabSize: "4"}}><b>Soyrizo Potato</b>   $3.00</pre>
      </div>
      <div style={{float: "right", marginRight: "25%", marginTop: "-32%"}}>
        <h2>Munchies</h2>
        <pre style={{tabSize: "4"}}><b>Veggie Burrito</b>   $4.00</pre>
        <pre style={{tabSize: "4"}}><b>Cheese Pizza Slice</b>   $3.00</pre>  
        <pre style={{tabSize: "4"}}><b>Cinnamon Roll</b>    $3.00</pre>     
      </div>
      <br/>
      {/* Maybe create a Cart component to organize your code a little better, also maybe create Coffee, Taco, and Munchie components. Will have to pass props for each item if you want to create new components */}

      {/* How do I display 0.00 instead of 0 or 3.50 instead of 3.5 (floating point values)?? */}
      <div>
      {/* <h2  addTip={this.AddTip.bind(this)}> */}
      {/* <h2>Your total is ${this.state.price.toFixed(2)} */}
       {/* <button>Add a Tip?</button> */}
      {/* </h2> */}
      { this.state.price > 0 && 

      //REFERENCING TIPAMOUNT COMPONENT:
      // bring the  true/false button functions that toggle the "tipbutton" state to true/false to the parent component???
      //bring the tip function that adds the tip to the total to the parent component??
      <div>
      <TipAmount total={this.state.price} tipButton={this.state.tipButton} tipButtonTrue={this.tipButtonTrue} tipButtonFalse={this.tipButtonFalse}/>
      {/* <button>Add A Tip</button> */}
      {/* <button>Check Out</button> */}
      </div>
      }
      <h2>Your total is ${this.state.price.toFixed(2)}</h2>
    {/* <input type="number"  
     //value={this.state.tip.toFixed(2)}
      />*/}
      </div>
    
      <div>Cart:
        <br/><br/>

    {/* {
      this.state.lgColdBrew > 0 &&
      <pre style={{tabSize: "4"}}>{this.state.lgColdBrew} Large Cold Brew   <button onClick={() => this.setState({price: this.state.price - 3.50, lgColdBrew: this.state.lgColdBrew - 1})}>Remove Item</button></pre>
     }      */}

    {
      this.state.lgColdBrew > 0 && 
      <FoodAndDrinks drink={this.state.lgColdBrew} name="Large Cold Brew" action={this.removeLg}/>
    }   

    {
      this.state.smColdBrew > 0 &&
      <FoodAndDrinks drink={this.state.smColdBrew} name="Small Cold Brew" action={this.removeSm}/>
    }

    {/* {this.state.smColdBrew > 0 && 
      <pre style={{tabSize: "4"}}>{this.state.smColdBrew} Small Cold Brew   <button onClick={() => this.setState({price: this.state.price - 2.50, smColdBrew: this.state.smColdBrew - 1})}>Remove Item</button></pre> 
    } */}

  

 

      </div>
    </div>
  )
  }
}

export default Coffee;