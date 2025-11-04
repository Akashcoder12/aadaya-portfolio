import React, { useState } from 'react'

export default function Contact() {
  
   const [form,setForm]=useState({
    name:"",email:"",message:""
   });

   const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});
   };

   const handleSubmit=(e)=>{
     e.preventDefault();
     alert("Message Sent! (This is a mock submit)");
   }

  return (
    <section className='py-10 max-w-xl mx-auto'>
      <h2 className='text-3xl font-semibold  text-center b-6'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='space-y-6'>
         <input 
          type="text"
          name="name"
          placeholder='name'
          value={form.name}
          onChange={handleChange}
          className='w-full p-3 border rounded-md'
         ></input>

         <input
          type="email"
          name="email"
          placeholder='Email'
          value={form.email}
          onChange={handleChange}
          className='w-full p-3 border rounded-md'
         >
         </input>
         <textarea
         name="message"
         placeholder='message'
         value={form.message}
         onChange={handleChange}
         className='w-full p-3 border rounded-md h-32'
         >
         </textarea>
         <button
         type="submit"
         className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md'
         >
          Send Message
         </button>
      </form>
    </section>
  )
}
