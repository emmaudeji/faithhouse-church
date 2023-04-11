import {FaMoneyBillWaveAlt} from 'react-icons/fa'

const GiveButton = ({text}) => {
  return (
    <div className='flex gap-1 items-center '>
      <div  className= { ` ${text ? 'font-bold text-[16px]' : ' text-lg'}` } >Give</div> 
      <div className= { `font-bold text-xl` } ><FaMoneyBillWaveAlt /> </div>
    </div>
  )
}

export default GiveButton;