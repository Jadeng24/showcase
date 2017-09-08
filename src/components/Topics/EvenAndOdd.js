import React, { Component } from "react"

class EvensAndOdd extends Component {
    constructor (){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: []
        }
    }
    inputUpdate(val) {
        this.setState({userInput: val})
        
        }
    change
    

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input className="inputLine" onChange = {(e) => this.inputUpdate(e.target.value)}></input>
                <button className="confirmationButton" onClick = {()=> this></button>
                <span className="resultsBox"></span>
                <span className="resultsBox"></span>

           </div>     
            
        )
    }
}
export default EvensAndOdd; 