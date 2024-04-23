
import { ArrowDropDown, CalendarMonth, InsertPhoto, Newspaper, PersonAdd, Public, Recommend, Square, TurnedIn } from '@mui/icons-material'
import { CornerUpRight, MessageSquare, Phone, Plus, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SearchBar2 } from './Searchbar'
import { Addfriend, NewsFeed } from '../Constants'
import Button from './Button'

type News = {
  name:string;
  job: string;
  time:string;
  title:string;
  photo:string;
  comments:String;
  share:string,
  dp:string;
  like:string,
};

type Friend={
  name:string;
  post:string;
  pic:string;
}
const News = ({ name,job,time,title,photo,comments,share,dp,like}: News) => {
  return (
  <div className='flex gap-5'>
   
    <div  className=' flex flex-col  h-[30rem] py-1 px-1 border-2 mb-4 '> 
    <div className='flex flex-row'>
    <Image
    src={dp}
    alt='dp'
    height={100}
    width={100}
    className='rounded-full w-[3rem] h-[2.8rem]'
    />
    <div className='flex flex-col '>
    <p className='text-gray-600 text-sm font-semibold  ml-2'>{name}</p>
    <p className='text-gray-800 text-[12px] font-thin ml-2 mt-[-4px]'>{job}</p>
    <p className='text-gray-800 text-[12px] font-thin  ml-2 mt-[-3px]'>{time}<Public className='text-[16px] mt-[-3px] ml-1' /> </p>
    </div>
    </div>
    <p className='text-gray-900 text-[14px] p-4'>{title}</p>
    <div className='overflow-hidden'>
            <Image
  src={photo}
  alt='photo'
  height={100}
  width={100}
  className=' w-full h-full object-cover'
/>

    </div>
   <div className='flex flex-col'>
    <div className=' flex flex-row  px-3 gap-10 py-3  '>
    <p className='text-[11px] text-gray-500 '><Recommend className='text-[20px] mt-[-2px] text-black' />{like}</p>
    <div className=' flex flex-row gap-1   text-[11px] ml-[18rem]'>
    <p  className='text-gray-500'>{comments} comments</p>
    <p className='text-gray-500'>{share} reposts</p>
</div> 
</div>
<div className='flex flex-row justify-between '>
<p className='text-[13px] flex flex-row ml-5 gap-1.5'><ThumbsUp  /> Like</p>
<p className='text-[13px] flex flex-row gap-1.5'><MessageSquare /> Comments</p>
<p className='text-[13px] flex flex-row mr-5 gap-1.5'><CornerUpRight /> Share</p>
</div>
</div>
    </div>
   
    </div>
 

    
  );
};



const Hero = () => {
  return (
    <section  className=' flex flex-col py-2 lg:mr:32 xl:flex-row  '>
        <div className=' flex flex-col lg:ml-32  '>
        <div className=' h-[22rem] w-full lg:w-[15rem]  bg-white rounded-2xl flex flex-row justify-center'>
        <div className=' h-0 bg-gray-300  rounded-2xl py-8 px-2 w-[30rem]  '>
          
            <div className='ml-48 lg:ml-14 mt-[-10px] h-24 w-24 flex justify-center rounded-full'>
                   <Image
                   src='/camera.png'
                   alt='camera'
                   width={100}
                   height={60}
                   className='rounded-full'
                   />
            </div>
            <p className='ml-48 lg:ml-14 text-[16px] font-semibold'>Raajz Koirala</p>
            <div>
         <hr className="border-t  border-gray-300 my-4" />
            <p className='text-gray-400 text-[12px] font-medium mr-36'>Connection</p>
            <p className='text-[12px] font-medium '> Grow your network</p>
            <PersonAdd 
            className='ml-48 mt-[-3.8rem] text-lg  '/>
            <hr className="border-t  border-gray-300 " />
            <p className='text-gray-600 text-[12px] font-sm mt-2'>
         
            Strengthen your profile with an AI writing assistant</p>
            <h6 className='text-[12px]'>
        <span className='text-[12px] font-medium'><Square className='text-yellow-300 text-lg'/> 
        Try premium for free
        </span>
        </h6>
        <hr className="border-t  border-gray-300 my-4" />
        <h6 className='text-[12px] mt-[-0.8rem]'>
        <span className='text-[12px] font-medium'>
          <TurnedIn /> My Items
        </span>
        </h6>
        </div>
         </div>     
        </div>
        <div className=' mt-2 rounded-2xl bg-white h-[8rem] w-full  '>
            <div className='text-blue-500 text-[12px] font-[600] ml-5 mt-2'>
            <p >Group</p>
            <p className='mt-3'>Events
            <Plus 
            className='ml-44 mt-[-1.2rem] text-gray-600 h-4 w-4' />
            </p>
            <p className='mt-3'>Following Hashtags</p>
            <hr className="border-t  border-gray-300 mr-4 my-2" />
            <p className='text-[13px] ml-10 font-medium text-gray-800'> Discover More</p>
            </div>
            
        </div>
        </div>
        


        <div className='h-full ml-4 rounded-2xl lg:w-[55%]  '>
            <div className='h-1/2  bg-gray-300  rounded-2xl py-8 px-2 w-full  '>
            <div className=' mt-[-18px] lg:ml-64  h-15 w-14 flex justify-center rounded-full'>
                   <Image
                   src='/camera.png'
                   alt='camera'
                   width={100}
                   height={60}
                   className='rounded-full'
                   />
                    <div className='ml-2'>
                   <SearchBar2  />
                   </div>
                   </div> 
                   <div className=' flex flex-row ml-20 mr-10 mt-2 text-sm text-gray-800 justify-between gap-10'>
                  <p>
                  <InsertPhoto 
                  className='text-blue-600 mr-1'/>
                    Media</p>
                  <p>
                    <CalendarMonth
                     className='text-yellow-600   mr-1'
                    />
                    Event</p>
                  <p>
                    <Newspaper
                     className='text-yellow-600 mr-1'
                      />
                    Write Article</p>
                </div>
            </div>
            <h1 className='flex flex-row text-[11px] mt-2 '>
            <hr className=" ml-1   w-3/4 my-2" />
            <p className='ml-4 px-1 text-[11px] text-gray-500'>Sort By: </p>  Top <ArrowDropDown className='mt-[-3px]'/>
            </h1>
            <div className='h-1/2  bg-gray-300  rounded-2xl py-8 px-2   '>
            
               
                {NewsFeed.map((news)=>( 
                    
                  <News
                  
                  key={news.name}
                  name={news.name}
                  job={news.job}
                  title={news.title}
                  photo={news.photo}
                  time={news.time}
                  comments={news.comments}
                  dp={news.dp}
                  like={news.like}
                  share={news.share}
                    
                  />
                  
                ))  
                }
               
           </div>
            </div>

            <div className=' h-full w-1/3  hidden   lg:flex flex-col'>
                 <p className='text-gray-600 font-semibold ml-3 mb-3 '>Add to your feed</p> 
                  <div>
                    {Addfriend.map((friend)=>(
                      <Friend 
                      key={friend.name}
                      name={friend.name}
                      pic={friend.pic}
                      post={friend.post}
                      />
                    ))}
                  </div>
            </div>
     
    </section>
  )
}
      const Friend =({name,pic,post}:Friend)=>{
            return(
              <div className='flex flex-row ml-3 mt-3 '>
                <Image 
                src={pic}
                alt='pic'
                height={100}
                width={100}
                className='rounded-full w-[3rem] h-[2.8rem]' />
                <div className='flex flex-col'>
                <p className='ml-2'>{name}</p>
                <p className='ml-2 text-gray-600 text-xs '>{post}</p>
                <Button 
        type="button"
        title="Follow"
        icon='arrow.svg'
        />
               
              </div>
              </div>
            )
      }

export default Hero
