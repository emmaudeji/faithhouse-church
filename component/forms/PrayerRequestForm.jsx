import {useState} from 'react'
import { AiOutlineMail, } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const PrayerRequestForm = () => {
  const [input, setInput] = useState({
    email: '',
    phonenumber: '',
    name: '',
    request: ''
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
      phonenumber: '',
      name: '',
      request: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <div className="flex gap-2 flex-col pb-2">

        <div className="flex-1">
          <p className="text-zinc-400">Name</p>
          <div className="flex-1 bg-white w-full rounded overflow-hidden py-3 text-zinc-400 px-4">
            <input type="text" name="name" value={input.name} placeholder="Enter your full name" 
            onChange={handleChange}
            className="w-full"/>
          </div>
        </div>
        

        <div className="flex-1 bg-white w-full relative rounded overflow-hidden  flex gap-2 items-center text-zinc-400 px-4">
              <div className="pr-2 py-3 border-r border-zinc-400 "><p className="text-xl"><AiOutlineMail/></p></div>
              <input type="text" name="email" value={input.email} placeholder="Enter Email" 
              onChange={handleChange}
              className="w-full"/>
        </div>

        
          <div className="flex-1 bg-white w-full relative rounded overflow-hidden  flex gap-2 items-center text-zinc-400">
            <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl"><AiOutlinePhone/></div>
            <input type="tel" name="phonenumber" value={input.phonenumber} placeholder="Phonenumber" 
            onChange={handleChange}
            className=""/>
          </div>            
          
          <div className="flex-1">
            <p className="text-zinc-400">Prayer request</p>
            <div className="flex-1 h-40 bg-white w-full rounded overflow-hidden py-3 text-zinc-400 px-4">
              <input type="text" name='request' value={input.request} placeholder="Enter your prayer request" 
              onChange={handleChange}
              className="w-full"/>
            </div>
          </div>

          <div>
          <button type="submit" className="flex px-6 py-3 border-2 rounded-full border-black hover:bg-black  hover:text-white cursor-pointer duration-300">
            Submit
        </button>
        </div>
        

      </div>

      
    </form>
  )
}

export default PrayerRequestForm