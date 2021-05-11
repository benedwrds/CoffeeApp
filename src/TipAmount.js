import React from 'react';

function TipAmount (props){
// class TipAmount extends React.Component{
  // constructor(){
    // super()
    //this.ButtonState = this.ButtonState.bind(this)
    //this.TrueButtonState = this.TrueButtonState.bind(this)
    //this.FalseButtonState = this.FalseButtonState.bind(this)
    //this.Tip15 = this.Tip15.bind(this)
   // this.Tip20 = this.Tip20.bind(this)
  //   this.state = { 
  //     button: false,
  //     total: 10,
  //     tipAmount: 0
  // }
  // }


  /*TrueButtonState(e){
    this.setState({
      button: true
    })
  }

  FalseButtonState(e){
    this.setState({
      button:false
    })
  }

  Tip15(e){
    //console.log(this.state.total)
    const tipAmount = this.state.total * .15
    this.setState({tipAmount: this.state.total * .15})
    console.log(this.state.tipAmount)
    console.log(this.state.total + tipAmount)
  }

  Tip20(){
    //console.log(this.state.total)
    const tipAmount = this.state.total * .20
    console.log(this.state.total + tipAmount)
  }*/

  //render(){
    const tip20 = props.total * .20
    const tip15 = props.total * .15
    console.log(tip20)
    // console.log(this.state.button)
    return (
      <div>
          {/* <button onClick={this.state.button === false ? this.TrueButtonState.bind(this) : this.FalseButtonState.bind(this)}>Add a Tip</button> */}
          <div>
          <button onClick={props.tipButton === false ? props.tipButtonTrue : props.tipButtonFalse } style={{marginRight: "3px", marginBottom: "10px"}}>Add A Tip</button>
          {/* <button style={{marginLeft: "3px"}}>Check Out</button> */}
          </div>
         {props.tipButton === true && 
            <div>
            {/* <h2>Add A Tip</h2> */}
            <button 
            // onClick={this.Tip15.bind(this)}
            >(15%)<br/>{`$${tip15.toFixed(2)}`}</button>
            <button 
            >(20%)<br/>{`$${tip20.toFixed(2)}`}
              {/* <br/>$1.45 */}
            </button>
            <button>Custom Amount</button>
            {/* <input type="number"></input> */}
            </div>
       } 

        {/* {this.state.button === false &&
          // <h2>Check Out</h2>
          <button>Check Out</button>
        } */}
        {/* <button onClick={this.TrueButtonState.bind(this)}>Add a Tip</button>
        <button onClick={this.ButtonState.bind(this)}>Add a Tip</button> */}
        {/* if(!this.state.button){ */}
      </div>
    )
  }
//}
export default TipAmount