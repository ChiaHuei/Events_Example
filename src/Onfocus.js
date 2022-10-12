import React from "react";

class OnFocusEvent extends React.Component{
    handlerFocus(){
        console.log('Focus!!!!!')
    }

    render(){
        return(
            <div>
                <input type="text" onFocus={this.handlerFocus} />
            </div>
        )
    }
}

export default OnFocusEvent