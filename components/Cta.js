import React, {Component} from 'react';

class CTA extends Component {
  render(){
    return(
      <div className="cta-container">
        <a className="close-cta" onClick={this.handleClick}>x</a>
        <h2>Getting Started</h2>
      </div>
    )
  }
}
export default CTA;