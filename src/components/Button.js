import React, {Component} from 'react';
import './Calculator.css';

class Button extends Component {
    render(){
        return(
            <div className="Button" 
                onClick={this.props.onClick}  
                data-value={this.props.value}
                sp-button={this.props.specialButton}> {this.props.label} </div>
        );
    }
}

export default Button;