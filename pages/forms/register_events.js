import { useState } from "react";
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { sendEmail } from "@/hooks/sendEmail";
import PageHeroBanner from "@/component/PageHeroBanner";
import Link from "next/link";
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { eventLabel } from "@/Data/eventlabel";



const register_events = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: '',
    name: '',
    feedback: '',
    event: '',
    title: 'EVENT REGISTRATION'
  })
  

  const animatedComponents = makeAnimated();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSelect = (selectedOption) => {
    setInput(prev => {
        return {
            ...prev,
            event: selectedOption
        }
    } );

    console.log(`Option selected:`, selectedOption);
    };

    
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
      event: '',
      title: ''
  })

  }

 console.log('iiiiiii',   input)
  return (
    <>
      <PageHeroBanner
        pageTitle="Event resgistration form >"
        heading="Register for this event"
        image={"/conference.jpg"}
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
                      <input type="email" name="email" value={input.email} placeholder="Enter Email" 
                      onChange={handleChange} required
                      className="w-full"/>
                </div>
                

                
                  <div className="flex-1 bg-white w-full relative rounded overflow-hidden  
                  flex gap-2 items-center text-zinc-400">
                    <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl"><AiOutlinePhone/></div>
                    <input type="tel" name="phonenumber" value={input.phonenumber} placeholder="Phonenumber" 
                    onChange={handleChange}
                    className=""/>
                  </div>  

                    <div className="">
                        <p className=" text-zinc-400">Select Event</p>
                        <CreatableSelect
                                    onChange={handleSelect}
                                    components={animatedComponents}
                                    // isMulti
                                    name="event"
                                    options={eventLabel}
                                    className="basic-multi-select "
                                    classNamePrefix="select h-14"
                                />      

                    </div>
                                   
                  
                  <div className="flex-1">
                    <p className="text-zinc-400">Expectation</p>
                    <div className="flex-1 h-60 bg-white w-full rounded overflow-hidden py-3
                     text-zinc-400 px-4">
                      <textarea type="text" name="feedback" value={input.feedback} placeholder="
                      Describe your inerest in the event" 
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


      </div>
      </div>
      
    </>
  );
};

export default register_events;
