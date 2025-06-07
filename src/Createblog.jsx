import axios from 'axios'
import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Createblog = ({ user }) => {
    const [info , setInfo] = React.useState({title : '' , author : user , content : ''})
    const navigate = useNavigate()
    // useEffect(() => {} , [])
    const createButton = async () => {
        const response = await axios.post("http://localhost:5000/api" , info)
        console.log(response)
        navigate('/blog')
    }
  return (
    <div className='border border-red-700 min-h-[100vh] p-4 mb-4'>
      <div className="">
      <h3 className="">Title</h3>
      <input type="text" name="" id="" className="border w-[95%] m-auto h-10 " onChange={(e) => setInfo((prev) => ({...prev , title: e.target.value}))}/>
      </div>
      <div className="mb-4">
        <h3 className="">Author</h3>
        <p className="border-b w-[50%] font-bold">{user}</p>
      </div>
      <div className="">
        <h3 className="">Content</h3>
        <textarea name="" id="" className="border w-[95%] min-h-[150px]" onChange={(e) => setInfo((prev) => ({...prev , content: e.target.value}))}></textarea>
      </div>
      <button className=" bg-black text-white p-2 rounded-lg m-2" onClick={ createButton }>Create</button>
    </div>
  )
}

export default Createblog
