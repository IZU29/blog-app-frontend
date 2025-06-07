import React from 'react'
import axios from 'axios'
import { Link , useNavigate } from 'react-router-dom'
const Blog = () => {
  let maxLength = 30
  const [blogPost , setblogPost] = React.useState([]) 
  const navigate = useNavigate()
  React.useEffect( () => {
    const BlogList = async () => {
      const response  =  await axios.get("http://localhost:5000/api")
      setblogPost(response.data.getPost)
      console.log(blogPost)
    }
    BlogList()
  },  [])
  console.log(blogPost)
  const selectBlog = (id) =>{
    console.log(id)
    navigate(`/single/${id}`)
  }
  const createBlog = () => {
    navigate('/create')
  }
  return (
    <div className=' w-[90%] m-auto flex flex-col'>
      {/* <button className=" bg- text-white p-2 rounded-lg m-2" onClick={ createBlog }>Create</button> */}
        <div className="flex flex-col">
        <input type="text" name="" id="" className="rounded-[200px] my-4 border border-[#412722] outline-none p-2 w-[90%] self-center" placeholder='Search Blog Post'/>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
       {
        blogPost.map((blog) => (
          <div className="border border-grey my-2 w-[100%]  rounded-lg p-2 cursor-pointer min-h-[120px]" key={blog._id} onClick={() => selectBlog(blog._id)}>
        <h2 className="text-2xl font-semibold truncate text-[#412722]">{blog.title}</h2>
        <h3 className="text-[#412722]">{blog.author}</h3>
        <p className="text-[#412722]">{blog.content.length > maxLength? blog.content.slice(0 ,maxLength) + '...': blog.content}</p>
      </div>
        )
      )
    }
    </div>
    </div> 
  )
}

export default Blog
