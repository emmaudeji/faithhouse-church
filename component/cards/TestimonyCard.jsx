import Link from "next/link"

const TestimonyCard = ({name, testimony, title, link}) => {
  return (
    <div className="h-[22rem] relative w-[16rem] rounded ">
        <div className="relative rounded bg-white px-4 pt-4  h-[90%] overflow-hidden">
          <p className="font-bold">{title}</p>
          <p className="py-2 overflow-hidden h-[70%]">
            {testimony}
          </p>
          <h3 className="text-zinc-400 hover:text-zinc-800 duration-300"><Link href={link ? `/testimonies/#${link}` : '/testimonies'}>Read more</Link></h3>
        </div>
        <div className="smallbox absolute bottom-0 w-[75%] h-16 right-0 bg-yellow-600 rounded-l-full flex justify-center items-center">
          <p>{name}</p>
        </div>
      </div>
  )
}

export default TestimonyCard;