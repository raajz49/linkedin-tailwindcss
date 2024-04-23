import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NAV_LINKS } from '../Constants';
import Link from "next/link"
import SearchBar from './Searchbar';



const Navbar = () => {
  return (
    <nav className="flex sticky z-10  top-0 bg-white  justify-between items-center  padding-container  px-10 py-2 ">
      <Link href="/">
       <LinkedInIcon className='text-[45px] mt-[-16px] ml-20   text-blue-700' />
         </Link>
         <div className='fixed ml-32'>
         <SearchBar />  
         </div>
         <ul className="space-x-6 mr-18 hidden lg:flex ">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}
              className="text-xl font-sans bg-white text-gray-800 
              flex flex-col items-center cursor-pointer transition-all font-light hover:font-normal mr-3">
                {link.icon}
                <span>
                    <p className='text-[12px] '>{link.label}</p>
                    
                    </span>
              
            </Link>
          </li>
        ))}
        <div className=''>
        <p className='text-[12px] w-[6rem]  mr-10 underline text-amber-800  '>Don’t miss: Premium for free</p>
        </div>
      </ul>
       
    </nav>
  )
}

export default Navbar
