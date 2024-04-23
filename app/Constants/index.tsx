// Import necessary modules from Material-UI

import { Bell, BriefcaseBusiness, CircleUserRound, Grip, HomeIcon, MessageSquareMore, Users } from "lucide-react";


// Define navigation links and corresponding icons
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home', icon: <HomeIcon /> },
  { href: '/', key: 'My Network', label: 'My Network', icon: <Users /> },
  { href: '/', key: 'Jobs', label: 'Jobs', icon: <BriefcaseBusiness /> },
  { href: '/', key: 'Messaging', label: 'Messaging', icon: <MessageSquareMore    /> },
  { href: '/', key: 'Noticifications', label: 'Noticifications', icon: <Bell/> },
  { href: '/', key: 'me', label: 'Me', icon: <CircleUserRound /> },
  { href: '/', key: 'For Business', label: 'For Business', icon: <Grip /> },

];


 // NewsFeed
 export const NewsFeed = [
  {
    name:"Raj Koirala",
    job:"React Developer",
    time:'2d',
    title: "Apple's First Foray into Wearable Tech: The Future of Eyewear named it as vison-pro",
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  photo:'/news1.jpg',
  views:'111',
  comments:'33',
  share:'11',
  dp:'/image.jpg',
  like:'50',

  },
  {
    name:"Raj Koirala",
    job:"React Developer",
    time:'2d',
    title: "Apple's First Foray into Wearable Tech: The Future of Eyewear named it as vison-pro",
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  photo:'/news1.jpg',
  views:'111',
  comments:'33',
  share:'11',
  dp:'/image.jpg',
  like:'50',
    
  },
  {
    name:"Raj Koirala",
    job:"React Developer",
    time:'2d',
    title: "Apple's First Foray into Wearable Tech: The Future of Eyewear named it as vison-pro",
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  photo:'/news1.jpg',
  views:'111',
  comments:'33',
  share:'11',
  dp:'/image.jpg',
  like:'50',

  },
  
];

export const Addfriend=[
  {
    name:'Jethalal Gada',
    post:'CEO at Gada Electronics',
    pic:'/image.jpg'
  }
,
  {
    name:'Daya Tapukepapa Gada',
    post:'Wife of Jethalal Gada',
    pic:'/daya.jpg'
  },

  {
    name:'Tipendra Jethalal Gada',
    post:'Son of Jethalal Gada',
    pic:'/tappu.jpg'
  },

  {
    name:'Champaklal Jyantilal Gada',
    post:'Father of Jethalal Gada',
    pic:'/champak.jpg'
  }
]