import React from 'react'

const Select = ({apiEnd, setApiEnd}) => {
  return (
    <div>
        <form onChange={(e) => setApiEnd(e.target.value)}>
            <input 
                className='posts'
                type="radio" 
                value ="posts"
                name ="selectOne"
                defaultChecked
            />
            <label htmlFor="posts">Posts</label>
            <input 
                className='comments'
                type="radio"
                value= "comments"
                name ="selectOne"
            />
            <label htmlFor="comments">Comments</label>
            <input 
                className='users'
                type="radio"
                value= "users"
                name ="selectOne"
            />
            <label htmlFor="users">Users</label>
        </form>
        
        

    </div>
  )
}

export default Select