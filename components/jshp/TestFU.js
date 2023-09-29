import { useState } from "react";
import FetchUser  from "./FetchUser";
import FetchUserByClick from "./FetchUserByClick";

export default function TestFU(){
    const[id, setId] = useState(1);
    return <>
    <input type="number" value={id} 
    onInput={evt=>setId(evt.target.value)}></input>
      <FetchUser id={id}/> 
      <hr/>
      <FetchUserByClick id={id}/>
    </>

}