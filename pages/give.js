import React, { useState, useEffect } from "react" ;
import {  PayPalButtons } from "@paypal/react-paypal-js";
import { OffereingType } from "@/Data/offeringType";


import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';


const Checkout = () => {
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [offering, setOffering] = useState([])
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
                    description: order,
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

    console.log('offering', order)
    return (
        
            <div className="section-padding grid pt-32 pb-16 justify-center items-center">
                <div className="sm:w-[500px] md:w-[700px] grid gap-2 ">
                   

                        
                            <h1 className="font-bold text-2xl text-zinc-500">
                                Give with joy
                            </h1>
                            <p>
                                We are committed to transforming our society with the gospel of the Kingdom of God. Partner with us to get this Gospel to the unreached.
                            </p>
                            {/* select offfering type */}
                            {/* <div className="my-4 w-full rounded-full border border-black p-6">
                                <select className="w-full bg-white " name="" id=""
                                    onChange={(e) => setOffering(e.target.value)}>
                                    <option  className="font-bold text-zinc-500" value="">{'Select offering type '}</option>
                                    {
                                        OffereingType?.map(({id, label}) => {
                                            return (
                                                <option key={id} value=''>{label}</option>
                                            )
                                        })
                                    }
            
                                </select>
                            </div> */}

                            <div className="py-4 relative z-50">
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

                            <h4 className="font-bold text-lg text-zinc-500">
                                Learn about the partnership type
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