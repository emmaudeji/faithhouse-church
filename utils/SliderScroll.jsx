
export const SliderScroll = ({distance, scrollRef}) => {
    const scroll = (direction) => {
      const { current } = scrollRef;
  
      if (direction === `<`) {
        current.scrollLeft -= distance;
      } else {
        current.scrollLeft += distance;
      }
    }
    
    return (
      <div className="absolute flex justify-between w-full top-[50%] z-10">
      {
        [`<`, `>`].map((item, i) => (
          <div key={i} onClick={() => scroll(item)}
          className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-400 hover:bg-zinc-200 duration-300 cursor-pointer">
            <div className="font-semibold text-3xl"
            >{item}</div>
          </div>
        ))
      }
    </div>    
    )
  }