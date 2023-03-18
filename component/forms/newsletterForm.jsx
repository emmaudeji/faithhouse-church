import Link from "next/link"
import { useState } from "react";
import OutlineButtonBlack from "../buttons/OutlineButtonBlack";
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const newsletterForm = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: ''
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
    console.log('input- ', input)

    setInput({
    email: '',
    phonenumber: ''
  })
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="flex gap-2 flex-col pb-2">

        <div className="flex-1 bg-white w-full relative rounded-full overflow-hidden  flex gap-2 items-center text-zinc-400">
          <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl"><AiOutlineMail/></div>
          <input type="email" name="email" value={input.email} placeholder="Enter email" 
          onChange={handleChange}
          className=""/>
        </div>

        <div className="flex-1 flex gap-2 items-center w-full">
          <div className="flex-1 bg-white w-full relative rounded-full overflow-hidden  flex gap-2 items-center text-zinc-400">
            <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl"><AiOutlinePhone/></div>
            <input type="tel" name="phonenumber" value={input.phonenumber} placeholder="Phonenumber" 
            onChange={handleChange}
            className=""/>
          </div>
            
            <button type="submit" className="flex px-6 py-3 border-2 rounded-full border-black hover:bg-black  hover:text-white cursor-pointer duration-300">
            Submit
            </button>
        </div>
      


      </div>

      
    </form>
  )
}

export default newsletterForm