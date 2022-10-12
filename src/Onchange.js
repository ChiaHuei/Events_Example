import React from "react";

class OnChangeEvent extends React.Component{
    handlerChange(event){
        window.alert(`${event.target.value}`)
    }

    render(){
        return(
            <div>
                <select onChange={ this.handlerChange } name= "location">
                    <option value="Taipei">台北</option>
      　            <option value="Taoyuan">桃園</option>
      　            <option value="Hsinchu">新竹</option>
                </select>
            </div>
        )
    }
}

export default OnChangeEvent