import React from 'react';


const List = (props)=>
{
    
 return (<>
 <div className="showItems" >
 <li className ="eachItem" >
 <h3>{props.text}</h3>
 <div className="todo-btn">
 
 <i className="bi bi-pencil-square" style={{fontSize: '2rem', marginLeft: '25px'}}  onClick={() =>{props.editItems(props.id);}}></i>
 <i className="bi bi-trash-fill" style={{fontSize: '2rem', marginLeft: '25px',paddingRight:'14px' }}  onClick={() =>{props.onSelect(props.id);}}></i>
 </div>
 </li>

 </div>
 </>);
};
export default List;