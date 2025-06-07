import React , {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
  const [blog , setBlog] = React.useState({})
  const { id } = useParams()

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:5000/api/${id}`)
      setBlog(response.data.getPost)
    }
    getBlog()
  } ,[]
)
console.log(blog)
  
  return (
    
    <div className="p-4">
    <div className=' w-[90%] flex flex-col m-auto'>
      <h2 className="text-[2.3rem] font-bold my-2">{blog.title}</h2>
      <p className="">{blog.content}</p>
      <p className="font-bold text-xl my-4">{blog.author}</p>
    </div>
    <div className="flex flex-col justify-between">
      <div className=" w-[80%] min-h-[100px] my-2 p-1">
        <h3 className=" font-bold">Commentator</h3>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos earum dignissimos tempora, possimus totam iure dolores, sit repellat optio vel itaque? Repellendus.</p>
      </div>
      <div className=" w-[80%] min-h-[100px] my-2 p-1">
        <h3 className=" font-bold">Commentator</h3>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos earum dignissimos tempora, possimus totam iure dolores, sit repellat optio vel itaque? Repellendus.</p>
      </div>
      <div className=" w-[80%] min-h-[100px] my-2 p-1">
        <h3 className=" font-bold">Commentator</h3>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos earum dignissimos tempora, possimus totam iure dolores,</p>
      </div>
    </div>
    </div>
  )
}

export default SingleBlog
