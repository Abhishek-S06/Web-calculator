import React, {Component} from 'react';
import './Calculator.css';
import Display from './Display';
import Keypad from './Keypad';
import Button from './Button';
import logo from './sign.png';
import * as math from "mathjs";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayData: ''
        }
}

handleClick = (event) => {
    const value = event.target.getAttribute('data-value');
        switch(value) {
            case 'clear': this.setState( {displayData: ''} );
                          break;
            case 'equal': this.calculate();
                          break;
            case 'backspace' : this.backspace();
                          break;    
            default: this.setState({ displayData: this.state.displayData + value});
        }
};

calculate = () => {
    try {
     const result = math.evaluate(this.state.displayData|| "") /*.toFixed(2)*/ + "";
        this.setState({displayData: result});
    } catch (err) {
        this.setState({displayData: 'error'})
    }
};

backspace = () => {
    this.setState ({
         displayData: this.state.displayData.slice(0,this.state.displayData.length-1)
        })
};


render(){
return(
 <div className="Calculator">
    <Display displayData={this.state.displayData}/>
    
    <img src={logo} alt="Signature Logo" width='340px' style={{display:'block',marginLeft:'auto', marginRight:'auto'}}/>

    <Keypad>
        <Button specialButton="highlight" onClick={this.handleClick} label="C" value="clear" />
        <Button specialButton="highlight" onClick={this.handleClick} label="%" value="%" />
        <Button specialButton="highlight" onClick={this.backspace} label="CE" value="backspace" />
        <Button specialButton="highlight" onClick={this.handleClick} label="/" value="/" />

        <Button onClick={this.handleClick} label="7" value="7" />
        <Button onClick={this.handleClick} label="8" value="8" />
        <Button onClick={this.handleClick} label="9" value="9" />
        <Button specialButton="highlight" onClick={this.handleClick} label="*" value="*" />

        <Button onClick={this.handleClick} label="4" value="4" />
        <Button onClick={this.handleClick} label="5" value="5" />
        <Button onClick={this.handleClick} label="6" value="6" />
        <Button specialButton="highlight" onClick={this.handleClick} label="-" value="-" />

        <Button onClick={this.handleClick} label="1" value="1" />
        <Button onClick={this.handleClick} label="2" value="2" />
        <Button onClick={this.handleClick} label="3" value="3" />
        <Button specialButton="highlight" onClick={this.handleClick} label="+" value="+" />

        <Button onClick={this.handleClick} label="00" value="00" />
        <Button onClick={this.handleClick} label="0" value="0" />
        <Button onClick={this.handleClick} label="." value="." />
        <Button specialButton='highlight' onClick={this.handleClick} label="=" value="equal" />
    </Keypad>
 </div>
);
}
}

export default Calculator;
