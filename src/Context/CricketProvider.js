import React, {useState} from "react";
import CricketContext from "./CricketContext";

//  let a=10;
   const CricketProvider=(props)=>{
    let[cricketer,setCricketer]=useState({
    name:"sachin Tendulkar",
    age:47,
    wicket:43,
    run:18500,
});

// when we have multiple useState
let [count,setCount]=useState();
   
    return(
        <div>
            <CricketContext.Provider value={{
                cricketer:cricketer,
                setCricketer:setCricketer,
                count:count,
                setCount:setCount,
                
           

            }
            }>
                  {props.children};
        
                </CricketContext.Provider>
                </div>
              
    )
}



// when we hava a single useState

    /* return(
        <div>
           
        <CricketContext.Provider value={cricketer}
        //     {
        //     name:cricketer.name,
        //     age:cricketer.age,
        //   }
        >
                {props.children};
        </CricketContext.Provider>
    
    </div>
    )
} */
export default CricketProvider;