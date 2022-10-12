import React from "react";

class OnKeyDownEvent extends React.Component{
    handlerKeyDown(e){
        e.preventDefault();
        window.alert(`你按下了${e.key} 按鍵，按鈕是 ${e.keyCode}`)
    }

    render(){
        return(
            <div>
                <input type="text" onKeyDown={this.handlerKeyDown} />
            </div>
        )
    }
}

export default OnKeyDownEvent