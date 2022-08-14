import React from 'react'

const MainBody = ({items}) => {
  return (
    <div>
        <ul>
        {items.map((item) =>(
            <li key={item.id}>
                {JSON.stringify(item)}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default MainBody