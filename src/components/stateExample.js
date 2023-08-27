import { useState } from "react";
function StateExample(){
    var[text,setText]=useState({
        Name:'karthik',
        age:22  

    });
    function change(){
        let copy={...text};
        copy.age +=1;
        // setText(copy)
        setText({
            Name:"karthik",
            age:30
        })
    }
    return(
        <div>
            <p>{text.Name}</p>
            <h2>{text.age}</h2>
            <button onclick={change}>change</button>
        </div>
    )
}
export default StateExample;