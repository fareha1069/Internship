import Pic1 from '../assets/pic1.jpg'
import Pic2 from '../assets/pic2.jpg'
import Pic3 from '../assets/pic3.jpg'
import Pic4 from '../assets/pic4.jpg'
import Pic5 from '../assets/pic5.jpg'
import Pic6 from '../assets/pic6.jpg'
import Pic7 from '../assets/pic7.jpg'
import Pic8 from '../assets/pic8.jpg'
import Pic9 from '../assets/pic9.jpg'
import Pic10 from '../assets/pic10.jpg'
import Pic11 from '../assets/pic12.jpg'
import Pic12 from '../assets/pic13.jpg'
import Pic13 from '../assets/pic14.jpg'
import Pic14 from '../assets/pic11.jpg'
import { Link } from 'react-router-dom'
// import { Description } from '@headlessui/react'
import {motion} from 'framer-motion'


const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'
  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic2,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic3,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic4,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'


  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic6,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic7,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic8,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic9,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },{
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic10,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic11,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic12,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: Pic13,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },
  {
    id: 1,
    name: 'Bli Tee',
    href: '#',
    imageSrc: Pic14,
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    description : 'Illuminate your space with our elegantly designed Aurora Glow Table Lamp, the perfect blend of contemporary style and soft ambient lighting. Crafted with a sleek matte metal base and a frosted glass dome, this lamp adds a touch of minimal sophistication to any room—be it your bedroom, living room, or office. The warm, dimmable LED light creates a cozy atmosphere ideal for relaxing or reading. With its compact design and wireless capability, it fits seamlessly on nightstands or desks without clutter. The lamp also features touch-sensitive controls and a long-lasting rechargeable battery, making it both functional and stylish. Whether you are redecorating or just need the right lighting accent, the Aurora Glow promises to be your go-to modern essential. Add this timeless piece to your home and experience lighting like never before'

  },
]

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  whileHover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
}
export default function Example() {
  return (
    <div  className="bg-gradient-to-br from-[#4A5A6A] via-[#5C6D7F] to-[#7A8899] relative flex flex-col justify-center px-8 py-2 w-full backdrop-blur-sm text-white overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white text-center mt-0">Our Products</h2>
        <div className="mt-6 grid grid-cols-1 rounded-10xl gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product ,index) => (
            
            <motion.div key={product.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              transition={{ delay: index * 0.05 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md ">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full bg-white object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between m-5">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to = '/product'state={product} >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
