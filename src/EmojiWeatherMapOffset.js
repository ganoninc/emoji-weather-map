import React, { Component } from 'react';

class EmojiWeatherMapOffset extends Component {
  render() {
    let spaces = []; 
    for (let index = 0; index <  this.props.length; index++) {
      spaces.push(<span className="offset-space">&nbsp;</span>);
    }

    return (
      spaces
    );
  }
}

export default EmojiWeatherMapOffset;