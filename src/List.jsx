import React from 'react';


const List = (props)=>
{
    
 return (<>
 <div className="showItems" >
 <li className ="eachItem" >
 <h3>{props.text}</h3>
 <i class="bi bi-trash-fill" style={{fontSize: '2rem', marginLeft: '25px',paddingRight:'14px' }}  onClick={() =>{props.onSelect(props.id);}}></i>
 </li>

 </div>
 </>);
};
export default List;