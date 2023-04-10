import {FaMoneyBillWaveAlt} from 'react-icons/fa'

const GiveButton = ({text}) => {
  return (
    <div className='flex gap-1 items-center '>
      <div  className= { `font-bold  ${text ? 'text-[18px]' : 'text-xl'}` } >Give</div> 
      <div className= { `font-bold text-xl` } ><FaMoneyBillWaveAlt /> </div>
    </div>
  )
}

export default GiveButton;