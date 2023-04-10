
import {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import OutlineButtonBlack from "@/component/buttons/OutlineButtonBlack";


const Paystack = ({offering}) => {
    const [paystack, setPaystack] = useState({
        email: '',
        amount: '',
        offering: offering
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setPaystack(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const handler = PaystackPop.setup({
            key: 'pk_test_5e645036a30c538419faf8f67e5e493252f1a770', // Replace with your public key
            email: paystack.email,
            amount: paystack.amount,
            // label: "Optional string that replaces customer email",
            onClose: () => {
              alert('Window closed.');
            },
            callback: (response) => {
              const message = 'Payment complete! Reference: ' + response.reference;
              alert(message);
            }
          });
        
          handler.openIframe();

        // console.log('paystack', paystack)

        setPaystack({
            email: '',
            amount: '',
            offering: ''
        })
    }
  return (
    <div>
        
        
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4">

            
            <div className=" text-zinc-500 
            border-2 border-zinc-300 hover:border-zinc-600
            duration-500 bg-white w-full rounded-full overflow-hidden  flex gap-2 items-center ">
                <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text-xl">
                    <AiOutlineMail/>
                </div>
                <input 
                type="email" 
                name="email" 
                value={paystack.email}
                placeholder="Enter email" 
                onChange={handleChange}
                required
                className=""/>
            </div>
            
            
            
            <div className=" text-zinc-500  border-2 border-zinc-300 hover:border-zinc-600 duration-500 bg-white w-full rounded-full overflow-hidden  flex gap-2 items-center ">
                <div className="pl-4 pr-2 py-3 border-r border-zinc-400 text">
                   NGN
                </div>
                <input type="number" 
                name="amount" 
                value={paystack.amount}
                required
                onChange={handleChange}  
                className=''   
                placeholder="Enter amount"        
                />
            </div>

            
            <button  type="submit" ><OutlineButtonBlack>Pay with Paystack</OutlineButtonBlack></button>
            
            </div>
        </form>
    </div>
  )
}

export default Paystack