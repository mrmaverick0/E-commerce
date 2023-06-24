import React from 'react'

const Contact = () => {
    let name,email,number;
    const nameHandler=(e)=>{
        e.preventDefault()
        name=e.target.value;
    }
    const emailHandler=(e)=>{
        e.preventDefault()
        email=e.target.value;
    }
    const numberHandler=(e)=>{
        e.preventDefault()
        number=e.target.value;
    }
    async function submitHandler  (e) {
        e.preventDefault();
        let obj={
            name:name,
            email:email,
            phoneNumber:number,
        }
        console.log(obj)
        const response = await fetch('https://e-commerce-91138-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data= await response.json();
    console.log(data)
    }
    return <form className="" onSubmit={submitHandler}>
        <h1 className='mt-10 flex items-center justify-center mb-12 text-2xl font-bold'>Contact Us</h1>
       <div className='flex items-center justify-center flex-col'>
       <label className='text-2xl font-bold'>Name</label>
        <input type="text" className='h-[40px] rounded-md mt-2 w-[500px] border-[3px] mb-4' placeholder='Name'  onChange={nameHandler}></input>
        <label className='text-2xl font-bold'>Email</label>
        <input type="email" className='h-[40px] rounded-md mt-2 w-[500px] border-[3px] mb-4'  placeholder='Enter your email'onChange={emailHandler} ></input>
        <label className='text-2xl font-bold'>Phone Number</label>
        <input type="number"  className='h-[40px] rounded-md mt-2 w-[500px] border-[3px] mb-4' placeholder='Enter your number' onChange={numberHandler}></input>
        <button className=' bg-black text-white w-[300px] h-[50px] rounded-md mt-4 hover:bg-white hover:border-[3px] text-lg font-bold hover:text-black' type='submit'>Submit</button>
       </div>
    </form>
}

export default Contact