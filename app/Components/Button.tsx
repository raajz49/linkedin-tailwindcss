import { Plus } from 'lucide-react'

type ButtonProps={
    type:'button'|'submit',
    title:string,
    full?:boolean,
    icon?:string,
   
}

 export const Button = ({type,title,icon,full}:ButtonProps) => {
  return (
    <button
    type={type}
    className={`text-base border-2 border-gray-600 flex flex-row h-8 w-2/3 mt-2  ml-2  mb-2 rounded-2xl ${full && 'w-full'}`}
    >
     {icon && <Plus className='text-base text-gray-600' /> } 
   <label className='text-base  font-sans cursor-pointer text-gray-600'>{title}</label>
    </button>
  )
}

export default Button
