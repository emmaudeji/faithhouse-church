import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai'

const Address = () => {
  return (
    <div className='flex gap-6 flex-col md:flex-row'>
      <div className="owerri">
              <h5 className='font-bold text-lg'>Owerri Address</h5>
              <p>123 Okigwe road, opposite Imo Girls College Owerri.</p>
              <div className='flex gap-2'>
                <AiOutlinePhone/>
                <h3>+234-8035003594</h3>
              </div>
      </div>

      <div className="PortHarcourt">
              <h5 className='font-bold'>PortHarcourt</h5>
              <p>1st Floor, Bellcrest Plaza, Omachi Junction, Rumuodomaya, PortHarcourt</p>
              <div className='flex gap-2'>
                <AiOutlinePhone/>
                <h3>+234-8147373052</h3>
              </div>
      </div>
    </div>
  )
}

export default Address