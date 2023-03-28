import Link from 'next/link';
import { newDate } from '@/hooks/newDate'
import { useSlider } from '@/hooks/useSlider';


const SuccessThought = () => {

  const list = ['Find out how you can daily grow and achieve better results', `People who don't work hard easily give up`, `When the product is right, you don’t have to be a great Marketer.`, `If you don’t sell, it’s not the product that’s wrong, it’s you.`, `Try not to become a man of success, but rather try to become a man of value.`, `Hard work beats talent when talent doesn’t work hard.`, `Do the best you can until you know better. Then when you know better, do better.`, `Whatever we believe about ourselves and our ability comes true for us.`, `The only thing standing between you and outrageous success is continuous progress.`  ]

  const {index, count} = useSlider(list, 5000)


  return (

    <Link href={{
        pathname: '/success-thought', 
        query: { date : newDate().split('/') },
      }}
    className='text-[12px] sm:text-[16px] w-full'>
          <div className='flex items-center justify-between '>
            <p className='text-yellow-900 pb-2' >
            Sucess thoughts today - {newDate()} 
            </p>
            <button className='px-3 py-1 ml-4  text-sm rounded-full border border-yellow-900 hover:border-black duration-300 '>READ</button>
          </div>
          <p>
            {list[index]}
          </p>
        </Link>
  )
}

export default SuccessThought;