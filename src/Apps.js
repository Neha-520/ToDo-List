import React, { useState } from 'react';

const Apps = () => {
     const [fullName, setfullName] = useState({
          fname: '',
          lname:'',
          Email:'',
          mobile: ''
     });
     const Input = (event) => {
         console.log(event.target.value);
         console.log(event.target.name);
        
        const {value,name} = event.target;

         setfullName((preValue)=>{
            return{
             ...preValue,
             [name]:value,
            }  

          // if(name === 'fname'){
          //     return {
          //      fname: value,
          //      lname: preValue.lname,
          //      Email:preValue.Email,
          //      mobile:preValue.mobile
                    
          //    };
          // }else if(name === 'lname'){
          //      return {
          //           fname: preValue.fname,
          //           lname: value,
          //           Email:preValue.Email,
          //           mobile:preValue.mobile
          //         };   
          // }
          // else if(name === 'Email'){
          //      return {
          //           lname: preValue.lname,
          //           fname: preValue.fname,
          //           Email: value,
          //           mobile:preValue.mobile
          //         };   
          // }
          // else {
          //      return {
          //           lname: preValue.lname,
          //           fname: preValue.fname,
          //           Email: preValue.Email,
          //           mobile:value

          //         };   
          // }
         
         
              });
         
     };
    
     const onSubmits = (event) => {
          event.preventDefault();
       alert('form submitted');
     };

     return (
          <>
               <center>
                    <form onSubmit={onSubmits} >
                         <h1 className="mt-5">Hello {fullName.fname} {fullName.lname} </h1>
                         <p>{fullName.Email}</p>
                          
                          <p>{fullName.mobile}</p>
                         <input className="mt-2" type="text" 
                         name="fname"
                         onChange={Input} value={fullName.fname} placeholder="enter your first name" /> <br></br>

                          <input className="mt-2" type="text" 
                         name="lname"
                         onChange={Input} value={fullName.lname} placeholder="enter your last name" /> <br></br>


                         <input className="mt-3" type="email" 
                         name="Email"
                         onChange={Input} value={fullName.Email} placeholder="enter your email" /><br></br>

                        <input className="mt-3" type="number" 
                         name="mobile"
                         onChange={Input} value={fullName.mobile} placeholder="enter your mobile" /><br></br>
                         <button className="mt-3 btn-info btn " type="submit" > Submit me 👍 </button>
                    </form>
               </center>
          </>
     )
}

export default Apps;
