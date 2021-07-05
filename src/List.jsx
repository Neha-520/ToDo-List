import React from 'react';

const basic={
    display: 'flex',
   justifyContent:'center',
   padding:'5px',
   flexDirection:'row',
   fontSize:'25px',
   top:'13px'
};
const List = (props)=>
{
    
 return (<>
 <div className="todo_style">
<li style={basic}>{props.text}
 <i class="bi bi-trash-fill" style={{fontSize: '2rem', marginLeft: '15px' }}  onClick={() =>{props.onSelect(props.id);}}></i>
 </li>

 </div>
 </>);
};
export default List;