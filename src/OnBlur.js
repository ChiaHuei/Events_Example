import React from "react";

class OnBlurEvent extends React.Component{
    handlerBlur(){
        window.alert('Blur!!!')
    }

    render(){
        return(
            <div>
                <input type="text" onBlur={ this.handlerBlur }/>
            </div>
        )
    }
}

export default OnBlurEvent

