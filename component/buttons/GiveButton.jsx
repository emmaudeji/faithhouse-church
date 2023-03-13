import {FaMoneyBillWaveAlt} from 'react-icons/fa'

const GiveButton = () => {
  return (
    <div className='flex gap-1 items-center '>
      <div>Give</div> <div className='font-bold text-xl'><FaMoneyBillWaveAlt /> </div>
    </div>
  )
}

export default GiveButton;