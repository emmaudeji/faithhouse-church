import { BsHandThumbsUp } from 'react-icons/bs'

const ConnectButton = () => {
  return (
    <div className='flex gap-1 items-center '>
      <div>Connect</div> <div className='font-bold text-xl'><BsHandThumbsUp /> </div>
    </div>
  )
}

export default ConnectButton;