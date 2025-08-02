import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/newLogo.png'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import {useContext} from 'react'
import {CartContext} from '../App.jsx'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  // { name: 'Cart', href: '/', current: false },
  
//   { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  
    const {open , setOpen}  = useContext(CartContext);
    return (
    <Disclosure as="nav" className="bg-gradient-to-br from-[#2E3A48] via-[#3b4a5a] to-[#5a6675]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-23 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-23 w-35 lg:mr-100"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 lg:space-x-26">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-white ' : '  hover:black text-white',
                      ' mt-7 rounded-md px-3 py-2 text-md lg:text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mt-6">
                <button
                  onClick={() => {
                    console.log( "Cart opened")   
                    setOpen(!open)} }
                  className="relative rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10">
                  <ShoppingCartIcon className="h-8 w-6 text-white hover:text-gray-300" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
              </button>
              </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-white' : ' ',
                'block rounded-md px-3 py-2 text-base text-white font-medium ',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
