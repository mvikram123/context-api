import React from "react";


const Hello=(props)=>{
    return(
        <div className="">
            <h1>Hello world</h1>
             {props.children}
              
            
            {
                props.name!=""&&
                <p>my name is {props.name},{props.age}</p>
            }
            {props.children}

        </div>
    )
}
export default Hello;