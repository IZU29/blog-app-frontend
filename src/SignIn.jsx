import React , {useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = ({ setName , choosePage }) => {
  const navigate  = useNavigate()
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:5000/user/login' , {email , password})
    const token = response.data.token
    const username = response.data.user.username
    localStorage.setItem('token' , token)
    console.log(username)
    navigate('/blog')
    setName(username)
  }
  return (
    <div>
    <div className="flex flex-col min-h-[100vh]  w-[90%] m-auto max-w-[500px]  border-blue-900 justify-center">
    <div className=''>
    <h2 className="self-center text-center  border-b-black w-[100%]  font-bold mb-4">Sign-Up</h2>
    </div>
    <div className="flex flex-col mb-8">
    <label htmlFor="" className="">Email:</label>
    <input type="text" name="" id="" className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="flex flex-col mb-8">
    <label htmlFor="" className="">Password:</label>
    <input type="password" name="" id="" className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <button className="border border-[#412722] text-[#412722] w-[30%] self-center p-2 rounded-[200px] font-bold" onClick={() => handleLogin()}>Sign-In</button>
    <p className="font-semibold self-center">Don't have an account ? <span className="text-[#412722]" onClick={choosePage}>Sign Up</span></p>
    </div>
    </div>
  )
}

export default SignIn
