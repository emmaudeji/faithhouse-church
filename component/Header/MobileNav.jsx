import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';
import { navlinks } from '@/Data/navLinks';
import { dropdownVariants } from '../animations/DropdownVariants';
import OnClickOutside from '../../hooks/OnClickOutside';

const MobileNav = ({setClick, active, setActive, click }) => {
  return (
    <AnimatePresence>
      {click && <motion.div
        variants={dropdownVariants}
        initial='hidden'
        animate='visible'
        exit='exit'

        className="fixed bg-black top-0 right-0 w-[60vw] md:hidden px-10 pt-20 h-[100vh]"
      >
        <OnClickOutside
          show={click}
          onClickOutside={() => setClick(false)}
          component={
             <div className='grid gap-8'>
                {
                  navlinks.map(({id, title, link}) => {
                    return (
                        <div key={id}
                        onClick={() => setClick(false)}>
                          <Link href={link}>
                            <div className={`hover:scale-105 duration-300 ${(active === title) ? 'font-bold' : ''} cursor-pointer border-b border-white`}
                            onClick={() => setActive(title)}>
                              {title}
                            </div>
                          </Link>
                      </div>
                    )
                  })
                }
            </div>
          }
        />
      </motion.div>}
    </AnimatePresence>
  )
}

export default MobileNav
  