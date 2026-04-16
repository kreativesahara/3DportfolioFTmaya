import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import './contact.css'

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    }
  });

 

  console.log(watch( "email"));
  return (
    <div>
      <Navbar  />
      <section className='mt-16 text-6xl font-bold '>
        <h1>Contact Us</h1>
      </section>
      <main className='bg-indigo-600 w-full h-screen mt-16'>
        <form className='w-1/3 mx-auto mt-20 bg-slate-300 p-10 rounded-lg'
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <label>First Name</label>
          <input {...register("firstname", { required: true, maxLength: 10 })} />
          {errors.firstname && <p className='invalid'>Your Firstname is required</p>}
          <label>Last Name</label>
          <input {...register("lastname", { required: true, maxLength: 10 })} />
          {errors.lastname && <p className='invalid'>You lastname is required</p>}
          <label>Email Address</label>
          <input {...register("email", { required: true, maxLength: 10 })} />
          {errors.email && <p className='invalid'>Please Enter Email</p>}
          <input type="submit" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contact