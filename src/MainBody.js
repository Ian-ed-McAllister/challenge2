import React from 'react'

const MainBody = ({items}) => {
  return (
    
      <table>
        <tbody>
          {items.map((item) =>(
            <tr key={item.id}>
              {Object.keys(item).map((key) =>(
                <td key={item.id+key}>
                  {JSON.stringify(item[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
  )
}

export default MainBody