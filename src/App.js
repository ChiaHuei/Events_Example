import React from "react";
import OnBlurEvent from "./OnBlur";
import OnChangeEvent from "./Onchange";
import OnClickEvent from "./Onclick";
import OnFocusEvent from "./Onfocus";
import OnKeyDownEvent from "./Onkeydown";
import OnSubmitEvent from "./Onsubmit";
import "./styles.css";
import Toggle from "./OS/Toggle"
import { LoggingButtonOne, LoggingButtonTwo } from "./OS/PublicClassField";

// components



export default function App() {
  return (
    <div className="App">
      <h1>React 事件處理</h1>
      <hr/>
      
      <h3>onClick 事件</h3>
      <OnClickEvent/>
      <hr/>

      <h3>onChange 事件</h3>
      <OnChangeEvent/>
      <hr/>
    
      <h3>OnSubmit 事件</h3>
      <OnSubmitEvent/>
      <hr/>

      <h3>OnKeyDown 事件</h3>
      <OnKeyDownEvent/>
      <hr/>

      <h3>OnFocus 事件</h3>
      <OnFocusEvent/>
      <hr/>

      <h3>OnBlur 事件</h3>
      <OnBlurEvent/>
      <hr/>
      <hr/>

      <h3>React OS Toggle (Bind 綁定)</h3>
      <Toggle/>
      <hr/>

      <h3>React OS (用 public class field 來綁定)</h3>
      <LoggingButtonOne/>
      <LoggingButtonTwo/>
      <hr/>


    </div>
  );
}



// name 指定標籤名稱
// id 指定標籤的唯一標識
// class 指定標籤的類名

// https://israynotarray.com/react/20220919/515545639/#React-%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A3%BE%E7%AC%A6%EF%BC%9F
// https://www.itread01.com/study/react-event-handle.html
// https://zh-hant.reactjs.org/docs/handling-events.html
