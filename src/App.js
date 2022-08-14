
import './App.css';
import {useState, useEffect } from 'react'
import Select from './Select'
import MainBody from './MainBody'

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [apiEnd, setApiEnd] = useState("posts")
  const [items,setItems] = useState([])
  const [fetchError, setFectchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() =>{
    const fetchItems  = async () =>{
      try{
        console.log(API_URL+apiEnd)
        const response = await fetch(API_URL+apiEnd)
        console.log(response)
        if (!response.ok) throw Error("did not recieve expected data")
        const listItems = await response.json()
        setItems(listItems)
        setFectchError(null)
      }catch(err){ 
        setFectchError(err.message)
  
      } finally{
        setIsLoading(false)
      }
    }
    (async () => await fetchItems())()
  },[apiEnd])

  


  return (
    <div>
      <Select 
        apiEnd = {apiEnd}
        setApiEnd = {setApiEnd}
      />
      <MainBody
        items = {items}
      />

      


    </div>
  );
}

export default App;
