import  { useState, useEffect,  } from "react" ;
import {  PayPalButtons } from "@paypal/react-paypal-js";
import { OffereingType } from "@/Data/offeringType";
import Paystack from "@/Payment/Paystack";
import { accountDetails } from "@/Data/accountDetails";

import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';


const Checkout = () => {
    
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [offering, setOffering] = useState([])
    const [payStackBtn, setPayStackBtn] = useState('')

    const handleDropdown = (param) => {
        if(!payStackBtn && param === 'paystack') {
            setPayStackBtn('paystack')
        } else if(!payStackBtn && param === 'bank_transfer') {
            setPayStackBtn('bank_transfer')
        } else {
            setPayStackBtn('')
        }
    }

    let order = []

    const animatedComponents = makeAnimated();

    const handleChange = (selectedOption) => {
        setOffering(selectedOption);
        console.log(`Option selected:`, selectedOption);
      };

    if(offering.length) {
        offering.map(item => {
            order.push(item.label)
        })
    }

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: String(order),
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);



    return (
        
            <div className="section-padding grid pt-32 pb-16 justify-center items-center">
                <div className="sm:w-[500px] md:w-[700px] grid gap-2 ">
                   

                            <h1 className="font-bold text-2xl text-zinc-500">
                                Give with joy
                            </h1>
                            <p>
                                We are committed to transforming our society with the gospel of the Kingdom of God. Partner with us to get this Gospel to the unreached.
                            </p>
                            

                            <div className="py-4 relative ">
                                <h2 className="font-bold pb-2">Select offering type or define your purpose of giving by typing a new label. 
                                You can enter multiple types</h2>
                  
                                <CreatableSelect
                                    // defaultValue={OffereingType[0].type}
                                    onChange={handleChange}
                                    components={animatedComponents}
                                    isMulti
                                    name="offering"
                                    options={OffereingType}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                       
                           
                            </div>


                            <div className="relative z-0">
                                <PayPalButtons
                                    style={{ layout: "vertical" }}
                                    createOrder={createOrder}
                                    onApprove={onApprove}
                                />
                            </div>

                            <div>
                            <div onClick={() => handleDropdown('paystack')}
                            className='mb-6 bg-blue-700 text-white rounded-md p-4 w-full cursor-pointer hover:bg-blue-800 duration-500'>
                                    <div className="text-center w-full">
                                        Pay with Paystack
                                    </div>
                            </div>
                            </div>
                            
                            {
                                payStackBtn === 'paystack' ? <div className="pb-6 "><Paystack offering={String(order)} /></div> : null
                            }


                            
                            <div>
                                <div onClick={() => handleDropdown('bank_transfer')}
                                className='mb-6 bg-red-700 text-white rounded-md p-4 w-full cursor-pointer hover:bg-red-800 duration-500'>
                                        <div className="text-center w-full">
                                            Pay with Bank transfer
                                        </div>
                                </div>
                            </div>

                            {
                                payStackBtn === 'bank_transfer' ? (
                                    <div className="grid gap-3 pb-6">
                                {
                                    accountDetails?.map(({id, account_number, bank, account_name}) => {
                                        return (
                                            <div key={id} className="pl-4 flex gap-4 sm:flex-row flex-col">
                                                <div className="ac1">
                                                    <div className="flex gap-2">
                                                    <p className="font-semibold text-zinc-500">Account name:</p>
                                                        <p className="flex "> {account_name} </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-semibold text-zinc-500">Account number:</p>
                                                        <p className="flex "> {account_number}</p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <p className="font-semibold text-zinc-500">Bank</p>
                                                        <p className="flex "> {bank}</p>
                                                    </div>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                               
                                
                            </div>
                                ) : null
                            }


                            <div className="mb-10 border-b border-zinc-300">
                                {' '}
                            </div>


                            <h4 className="font-bold text-lg text-zinc-500">
                                Learn about our giving types
                            </h4>
                            <div className="grid gap-1 ">
                                {
                                    OffereingType?.map(({id, label, description}) => {
                                        return (
                                            <div key={id} className="border-b border-zinc-300">
                                                <h5 className="font-bold">{label}                                                </h5>
                                                <p className="pl-2">{description}  </p>
                                            </div>
                                                    )
                                    })
                                }
                            </div>

                   
                        <p className="pt-10">
                            Thank you for making your donations. God loves a cheerful giver.
                        </p>

                </div>
            </div>
    );
}

export default Checkout