import React from "react";

class OnSubmitEvent extends React.Component{
    handlerSubmit(e){
        e.preventDefault();
        window.alert(`${e.target.account.value}`);
    }

    constructor(props){
        super(props);
        this.state = {text:new String()};
    }
    
    

    render(){
        return(
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <label htmlFor="account">帳號 </label>
                    <input id="account" type="text" value={this.text} />
                    <button type="submit"> 送出</button>
                </form>
            </div>
        )
    }
}


export default OnSubmitEvent