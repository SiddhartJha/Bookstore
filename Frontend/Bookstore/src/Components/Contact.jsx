import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'


function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data)
    
     
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Signup</h3>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input 
              type = "text"
              placeholder="Enter your Name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input 
              type = "email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* password */}
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <input 
              type = "text"
              placeholder="Type your Message"
              className="w-80 h-40 px-3 py-0 border rounded-md outline-none"
              {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact