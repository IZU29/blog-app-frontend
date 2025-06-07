import { useState , useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './NavBar'
import Signpage from './Signpage'
import SignIn from './SignIn'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
import Createblog from './Createblog';
import DiaryCalendar from './Calendar';
import SwiperSlideshow from "./SwiperSlideshow";
function App() {
  const [user , setUsername] = useState('')
  const [count, setCount] = useState(0)
  const [sign , setSign] = useState(true)
  const choosePage = () => {
    setSign(prev => !prev)
    
  }
  const setName  = (item) => {
    setUsername(item)
  }
  return (
    
    // <Router>
    // <>
    // <NavBar />
    // {/* {
    // (sign)?
    // <Signpage 
    // choosePage = {choosePage}
    // />:
    // <SignIn 
    // choosePage = {choosePage}/>
    // } */}
    // <Blog />
    // <SingleBlog />
    // </>
    // <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/about" element={<About />} />
    // </Routes>
    // </Router>
    <>
    <Router>
    <NavBar />
    
    <div className=" border-black flex flex-col lg:flex-row">
    <div className=" border-blue-600 w-[100%] lg:w-[70%]">
    <Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/single/:id" element={<SingleBlog/>} />
    <Route path="/login" element={<SignIn setName = {setName}/>} />
    <Route path="/register" element={<Signpage  setName = {setName}/>} />
    <Route path="/create" element={<Createblog user = {user}/>} />
    </Routes>
    </div>
    <div className="w-[100%] lg:w-[30%] flex flex-col border-red-600 p-4">
      <SwiperSlideshow />
      {/* <DiaryCalendar /> */}
    </div>
    </div>
    </Router>
    </>
  )
}

export default App
