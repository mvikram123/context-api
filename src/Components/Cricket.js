import React, {useContext} from "react";
import CricketContext from '../Context/CricketContext';

const Cricket=()=>{
//    let info=useContext(CricketContext);
//    destructuring of above code

let {cricketer,setCricketer}=useContext(CricketContext);
function updateWicket(){
    setCricketer({...cricketer, wicket:50});
}
   return (
    <div>
         <h1>The Cricketer name is {cricketer.name}</h1>
        <p>age is {cricketer.age}</p>
        <p>wicket is {cricketer.wicket}</p>
        <button onClick={updateWicket}>updatewicket</button>
        <p>run is {cricketer.run}</p>

        {/* <h1>The Cricketer name is {info.name}</h1>
        <p>age is {info.age}</p>
        <p>wicket is {info.wicket}</p>
        <p>run is {info.run}</p>  */}

        {/* <p>the value of a is {a}</p> */}
        {/* <h1>The Hard way</h1>
        <CricketContext.Consumer>
            {(info)=>(
                <h1>The Moment of truth{info}</h1>
            )}
        </CricketContext.Consumer> */}
    </div>

    )
}
export default Cricket;