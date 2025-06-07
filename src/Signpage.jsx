import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// border border-red-500 
const Signpage = ({choosePage , setName}) => {
    const navigate = useNavigate()
    const [email , setEmail] = React.useState('')
    const [username , setuserName] = React.useState('')
    const [password , setPassword] = React.useState('')
    const handleRegister = async (e) => {
      // e.preventDefault()
      const response = await axios.post("http://localhost:5000/user/register" , {username , email , password})
      const token = response.data.token
      localStorage.setItem('token' , token);
      console.log('Clicked !!!')
      navigate('/blog')
      setName(username)
    }
  return (
    <div className="flex flex-col min-h-[100vh]  w-[90%] m-auto">
    <div className=''>
      <h2 className="self-center text-center  border-b-black w-[100%] mt-24 font-bold">Sign-Up</h2>
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Name:</label>
    <input type="text" name=""  className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4"placeholder='Enter Your Name ' value={username} onChange={(e) => setuserName(e.target.value)}/>
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Email:</label>
    <input type="text" name=""  className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Password:</label>
    <input type="password" name=""  className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button className="bg-[#9DA1F1] w-[30%] self-center p-2 rounded-[200px] font-bold" onClick={() => handleRegister()}>Sign-Up</button>
    <p className="font-semibold self-center">Already have an account ? <span className="text-[#0029FF]" >Sign-in</span></p>
    </div>
  )
}

export default Signpage
