import React from "react";

class LoggingButtonOne extends React.Component {
    // 這個語法確保 `this` 是在 handleClick 中被綁定。
    handleClick = () => {
      console.log('this is:', this);
    };
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me(One)
        </button>
      );
    }
  }

  
  
  class LoggingButtonTwo extends React.Component {
      handleClick() {
          console.log('this is:',this);
        }
        
        render() {
            // 這個語法確保 `this` 是在 handleClick 中被綁定：
            return (
                <button onClick={() => this.handleClick()}>
          Click me(Two)
        </button>
      );
    }
}

export {LoggingButtonOne,LoggingButtonTwo}

//   如果沒有使用 class field 的語法的話，你則可以在 callback 中使用 arrow function