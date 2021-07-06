import React from 'react';

const basic={
    display: 'flex',
   justifyContent:'left',
   padding:'5px',
   flexDirection:'row',
   fontSize:'25px',
   top:'30px'
};
const List = (props)=>
{
    
 return (<>
 <div className="todo_style">
 <li style={basic}>
 <i class="bi bi-trash-fill" style={{fontSize: '2rem', marginLeft: '25px',paddingRight:'14px' }}  onClick={() =>{props.onSelect(props.id);}}></i>
{props.text}
 
 </li>

 </div>
 </>);
};
export default List;