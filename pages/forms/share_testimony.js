import { useState } from "react";
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { sendEmail } from "@/hooks/sendEmail";
import PageHeroBanner from "@/component/PageHeroBanner";
import Link from "next/link";


const testimony = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: '',
    name: '',
    feedback: '',
    title: 'TESTIMONY'
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    

    // send email through emailjs
    sendEmail(input)

    console.log('input- ', input)

    setInput({
      email: '',
      phonenumber: '',
      name: '',
      feedback: '',
      title: ''
  })

 
  }

  return (
    <>
      <PageHeroBanner
        pageTitle="testimony form >"
        heading="Share your testimony"
        image={"/testimony.jpg"}
      />
      {/* form */}

      <div className="section-padding flex w-full justify-center py-14 ">

        <div>
        <div className="p-6 bg-zinc-200 rounded-md w-80 sm:w-full ">
        
        <form id="form" onSubmit={handleSubmit}>
          
              <div className="flex gap-2 flex-col pb-2">

                <div className="flex-1">
                  <p className="text-zinc-400">Name</p>
                  <div className="flex-1 bg-white w-full rounded overflow-hidden py-3
                   text-zinc-400 px-4">

                    <input type="text" name="name" value={input.name} 
                    placeholder="Enter your full name" 
                    onChange={handleChange}
                    className="w-full"/>
                  </div>
                </div>
                

                <div className="flex-1 bg-white w-full relative rounded overflow-hidden 
                  flex gap-2 items-center text-zinc-400 px-4">
                      <div className="pr-2 py-3 border-r border-zinc-400 "><p className="text-xl"><AiOutlineMail/></p></div>
                      <input type="text" name="email" value={input.email} placeholder="Enter Email" 
                      onChange={handleChange}
                      className="w-full"/>
                </div>

                
                  <div className="flex-1 bg-white w-full relative rounded overflow-hidden  
                  flex gap-2 items-center text-zinc-400">
                    <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl"><AiOutlinePhone/></div>
                    <input type="tel" name="phonenumber" value={input.phonenumber} placeholder="Phonenumber" 
                    onChange={handleChange}
                    className=""/>
                  </div>            
                  
                  <div className="flex-1">
                    <p className="text-zinc-400">Testimony</p>
                    <div className="flex-1 h-60 bg-white w-full rounded overflow-hidden py-3
                     text-zinc-400 px-4">
                      <textarea type="text" name="feedback" value={input.feedback} placeholder="Enter your testimony" 
                      onChange={handleChange}
                      className="w-full h-full"/>
                    </div>
                  </div>

                  <div>
                  <button type="submit" className="w-full text-center px-6 py-3 border-2
                   rounded-md bg-zinc-300 hover:bg-black
                    hover:text-white cursor-pointer duration-300">
                    Submit
                </button>
                </div>
                

              </div>

              
            </form>

           
        </div>

        <div className="flex justify-center mt-6 p-4 text-center border-2 
        rounded-md border-zinc-200 hover:bg-zinc-200 duration-500">
              <Link href={'/testimonies'}> 
                 <italic className=''>Read testimonies and be blessed.</italic> 
              </Link>
            </div>

      </div>
      </div>
      
    </>
  );
};

export default testimony;
