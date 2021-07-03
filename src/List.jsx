import React from 'react';

const basic={
    display: 'flex',
   justifyContent:'left',
   padding:'5px',
   flexDirection:'row',
};
const List = (props)=>
{
    
 return (<>
 <div className="todo_style">
 <h3 style={{padding:'20px'}}><i class="bi bi-trash-fill"  onClick={() =>{props.onSelect(props.id);}}></i></h3>
 
 <h5><li style={basic}>{props.text}</li></h5>
 </div>
 </>);
};
export default List;