import React from "react";



class OnClickEvent extends React.Component{
    handlerClick () {
        window.alert('Click!');
    }

    render(){
        return(
            <div>
                <button onClick={ this.handlerClick }> 點我點我點我 </button>
            </div>
        )
    }
}

export default OnClickEvent
