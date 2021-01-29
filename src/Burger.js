import React, { useState } from 'react';
import burger from './images/burger.png';
function Burger(props){
    //class Burger extends React.Component {
    //  render(){
  const [pressed, setPressed] = useState(false);
  const  classValue=pressed ? "burger__img burger__img--pressed" : "burger__img";
          return(
              <div className="burger">
           {pressed ? "painettu" : "ei painettu"}
             <img src={burger}
              alt="" 
             className={classValue}
             //onClick={this.props.onClick} 
             onClick={props.onClick} 
             onPointerDown={()=>setPressed(true) }
             onPointerUp={()=> setPressed(false)}
              />
  
              </div>
          );
   }
   export default Burger;