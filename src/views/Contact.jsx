import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

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

  return (
    <div className="bg-bg-primary min-h-screen">
      <Navbar />
      
      {/* Contact Hero Area */}
      <div className="pt-24 pb-8 md:pt-32 md:pb-12 text-center pointer-events-none">
        <h3 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold bg-gradient-to-br from-accent-primary to-accent-secondary bg-clip-text text-transparent px-lg">
          Contact Us
        </h3>
      </div>
      
      {/* Custom Form Styling Logic using Tailwind */}
      <main className="flex justify-center items-center px-lg py-12 md:py-20 lg:py-24">
        <form 
          className="bg-surface-glass backdrop-blur-3xl border border-border-color rounded-xl p-xl shadow-lg w-full max-w-[500px] flex flex-col gap-sm"
          onSubmit={handleSubmit((data) => {
            alert(JSON.stringify(data));
          })}
        >
          <div className="flex flex-col gap-2">
            <label className="text-text-primary text-sm font-semibold tracking-wide uppercase opacity-80">First Name</label>
            <input 
              {...register("firstname", { required: true, maxLength: 20 })} 
              className="bg-bg-secondary border border-border-color rounded-md px-md py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-base"
            />
            {errors.firstname && <p className="text-red-500 text-xs mt-1 animate-reveal-up font-medium">Your Firstname is required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-text-primary text-sm font-semibold tracking-wide uppercase opacity-80">Last Name</label>
            <input 
              {...register("lastname", { required: true, maxLength: 20 })} 
              className="bg-bg-secondary border border-border-color rounded-md px-md py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-base"
            />
            {errors.lastname && <p className="text-red-500 text-xs mt-1 animate-reveal-up font-medium">Your lastname is required</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-text-primary text-sm font-semibold tracking-wide uppercase opacity-80">Email Address</label>
            <input 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
              className="bg-bg-secondary border border-border-color rounded-md px-md py-3 text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-base"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 animate-reveal-up font-medium">Please Enter a valid Email</p>}
          </div>

          <input 
            type="submit" 
            value="Send Message" 
            className="bg-gradient-to-br from-accent-primary to-accent-secondary text-white font-bold py-3 mt-4 rounded-md cursor-pointer hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-base ease-smooth"
          />
        </form>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;