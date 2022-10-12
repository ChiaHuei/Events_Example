import React from "react";

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
      console.log('this is:',this)
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

// 當你使用一個方法，卻沒有在後面加上 () 之時
// 例如當你使用 onClick={this.handleClick} 時，你應該要綁定這個方法。

export default Toggle