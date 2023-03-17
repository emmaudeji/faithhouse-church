import Link from "next/link"
import OutlineButtonBlack from "../buttons/OutlineButtonBlack"
import NewsletterForm from "../forms/newsletterForm"

const Newsletter = () => {
  return (
    <div className='w-full flex items-center flex-col md:flex-row pt-14
    '>

      <div className="bg-yellow-400 py-16 md:py-12 lg:py-16  pl-6 md:pl-16 lg:pl-36 pr-6 flex-1 w-full h-80">
        <div className="content">
          <h3 className="font-bold text-2xl">Get Inspired Daily</h3>
          <p className="py-2">Join our online  community and receive daily success thoughts to inspire your day and get notified about our events and news.</p>
        </div>

        <div className="forms">
          <NewsletterForm/>
        </div>
      </div>
      <div className="bg-yellow-500 py-16 pr-6 sm:pr-16 lg:pr-36 pl-6 flex-1 w-full h-80 flex items-center ">
        <div>
           <div className="c">
          <h3 className="font-bold text-2xl">Partner and Give</h3>
          <p className="py-2">We are committed to transforming our society with the gospel of the Kingdom of God. Partner with us to get this Gospel to the unreached. </p>
          <OutlineButtonBlack>
            <Link href='/partnership'>
              Find out more
            </Link>
          </OutlineButtonBlack>
        </div>
        </div>
       
      </div>
    </div>
  )
}

export default Newsletter